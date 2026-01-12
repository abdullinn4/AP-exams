package org.example.apexams.questionBank.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.QuestionMapper;
import org.example.apexams.questionBank.dto.QuestionForStudentResponse;
import org.example.apexams.questionBank.dto.QuestionResponse;
import org.example.apexams.questionBank.dto.QuestionResultResponse;
import org.example.apexams.questionBank.entity.QuestionEntity;
import org.example.apexams.questionBank.entity.enums.QuestionType;
import org.example.apexams.questionBank.repo.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;
    private final ObjectMapper objectMapper;

    @Override
    @Transactional(readOnly = true)
    public QuestionResponse getQuestion(UUID questionId) {
        QuestionEntity question = findQuestionByIdOrThrow(questionId);
        return questionMapper.toDto(question);
    }

    @Override
    @Transactional(readOnly = true)
    public List<QuestionResponse> getQuestionsByCourse(UUID courseId) {
        return questionRepository.findAllByCourseId(courseId)
                .stream()
                .map(questionMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<QuestionResponse> getQuestionsByType(UUID courseId, QuestionType type) {
        return questionRepository.findAllByCourseIdAndType(courseId, type)
                .stream()
                .map(questionMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public QuestionForStudentResponse getQuestionForStudent(UUID questionId) {
        QuestionEntity question = findQuestionByIdOrThrow(questionId);
        return questionMapper.toStudentDto(question);
    }

    @Override
    @Transactional(readOnly = true)
    public boolean validateAnswer(UUID questionId, String userAnswer) {
        QuestionEntity question = findQuestionByIdOrThrow(questionId);

        try {
            String answerKeyJson = question.getAnswerKeyJson();

            if (question.getType() == QuestionType.SINGLE_CHOICE) {
                // Для single choice: {"correct": "A"}
                String correctAnswer = objectMapper.readTree(answerKeyJson).get("correct").asText();
                return correctAnswer.equalsIgnoreCase(userAnswer.trim());
            } else if (question.getType() == QuestionType.MULTIPLE_CHOICE) {
                // Для multiple choice: {"correct": ["A", "C"]}
                List<String> correctAnswers = objectMapper.readValue(
                        objectMapper.readTree(answerKeyJson).get("correct").toString(),
                        objectMapper.getTypeFactory().constructCollectionType(List.class, String.class)
                );
                List<String> userAnswers = List.of(userAnswer.split(","));
                return correctAnswers.size() == userAnswers.size() &&
                        correctAnswers.containsAll(userAnswers);
            } else {
                // Для open questions - простое сравнение строк (можно улучшить)
                String correctAnswer = objectMapper.readTree(answerKeyJson).get("correct").asText();
                return correctAnswer.equalsIgnoreCase(userAnswer.trim());
            }
        } catch (Exception e) {
            log.error("Error validating answer for question {}: {}", questionId, e.getMessage());
            return false;
        }
    }

    @Override
    @Transactional(readOnly = true)
    public QuestionResultResponse checkAnswer(UUID questionId, String userAnswer) {
        QuestionEntity question = findQuestionByIdOrThrow(questionId);
        boolean isCorrect = validateAnswer(questionId, userAnswer);

        try {
            String answerKeyJson = question.getAnswerKeyJson();
            String correctAnswer;

            if (question.getType() == QuestionType.SINGLE_CHOICE) {
                correctAnswer = objectMapper.readTree(answerKeyJson).get("correct").asText();
            } else if (question.getType() == QuestionType.MULTIPLE_CHOICE) {
                correctAnswer = objectMapper.readTree(answerKeyJson).get("correct").toString();
            } else {
                correctAnswer = objectMapper.readTree(answerKeyJson).get("correct").asText();
            }

            return new QuestionResultResponse(
                    questionId,
                    isCorrect,
                    correctAnswer,
                    question.getExplanation()
            );
        } catch (Exception e) {
            log.error("Error checking answer for question {}: {}", questionId, e.getMessage());
            throw new IllegalStateException("Failed to check answer");
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<QuestionEntity> generateRandomQuestions(UUID courseId, int count) {
        List<QuestionEntity> allQuestions = questionRepository.findAllByCourseId(courseId);

        if (allQuestions.size() <= count) {
            log.warn("Not enough questions in course {}. Requested: {}, Available: {}",
                    courseId, count, allQuestions.size());
            return allQuestions;
        }

        Collections.shuffle(allQuestions);
        List<QuestionEntity> randomQuestions = allQuestions.subList(0, count);

        log.info("Generated {} random questions for course {}", count, courseId);
        return randomQuestions;
    }

    private QuestionEntity findQuestionByIdOrThrow(UUID questionId) {
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new IllegalArgumentException("Question not found: " + questionId));
    }
}
