package org.example.apexams.dataloader.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.entity.enums.CourseStatus;
import org.example.apexams.courses.repo.CourseRepository;
import org.example.apexams.dataloader.dto.*;
import org.example.apexams.lessons.entity.LessonContentEntity;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessons.repo.LessonContentRepository;
import org.example.apexams.lessons.repo.LessonRepository;
import org.example.apexams.questionBank.entity.QuestionEntity;
import org.example.apexams.questionBank.entity.enums.QuestionType;
import org.example.apexams.questionBank.repo.QuestionRepository;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.tariffs.repo.TariffRepository;
import org.example.apexams.tests.entity.TestEntity;
import org.example.apexams.tests.entity.TestQuestionEntity;
import org.example.apexams.tests.entity.enums.TestType;
import org.example.apexams.tests.repo.TestQuestionRepository;
import org.example.apexams.tests.repo.TestRepository;
import org.example.apexams.units.entity.UnitEntity;
import org.example.apexams.units.repo.UnitRepository;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class CourseDataLoaderService {
    private final CourseRepository courseRepository;
    private final UnitRepository unitRepository;
    private final LessonRepository lessonRepository;
    private final LessonContentRepository lessonContentRepository;
    private final TariffRepository tariffRepository;
    private final QuestionRepository questionRepository;
    private final TestRepository testRepository;
    private final TestQuestionRepository testQuestionRepository;
    private final ObjectMapper objectMapper;

    @Transactional
    public void loadCourseData(String courseSlug) throws IOException {
        log.info("Starting data load for course: {}", courseSlug);

        String basePath = "data/courses/" + courseSlug + "/";

        // 1. Load and create Course
        CourseDataDto courseData = loadJson(basePath + "course.json", CourseDataDto.class);
        CourseEntity course = createCourse(courseData);
        log.info("Created course: {}", course.getTitle());

        // 2. Load and create Units
        List<UnitDataDto> unitsData = loadJsonList(basePath + "units.json", new TypeReference<>() {});
        Map<Integer, UnitEntity> unitMap = new HashMap<>();
        for (UnitDataDto unitData : unitsData) {
            UnitEntity unit = createUnit(unitData, course);
            unitMap.put(unitData.getOrder(), unit);
            log.info("Created unit {}: {}", unitData.getOrder(), unit.getTitle());
        }

        // 3. Load and create Lessons with Content
        List<LessonDataDto> lessonsData = loadJsonList(basePath + "lessons.json", new TypeReference<>() {});
        Map<String, LessonEntity> lessonMap = new HashMap<>();
        for (LessonDataDto lessonData : lessonsData) {
            UnitEntity unit = unitMap.get(lessonData.getUnitOrder());
            if (unit == null) {
                log.warn("Unit not found for lesson: unitOrder={}", lessonData.getUnitOrder());
                continue;
            }

            LessonEntity lesson = createLesson(lessonData, unit);
            String lessonKey = lessonData.getUnitOrder() + "-" + lessonData.getLessonOrder();
            lessonMap.put(lessonKey, lesson);

            // Load markdown content
            String contentPath = basePath + "lesson-content/" + lessonData.getContentFile();
            String markdownContent = loadMarkdownFile(contentPath);
            createLessonContent(lesson, lessonData.getVideoUrl(), markdownContent);

            log.info("Created lesson {}-{}: {}", lessonData.getUnitOrder(), lessonData.getLessonOrder(), lesson.getTitle());
        }

        // 4. Load and create Tariffs
        List<TariffDataDto> tariffsData = loadJsonList(basePath + "tarrifs.json", new TypeReference<>() {});
        for (TariffDataDto tariffData : tariffsData) {
            TariffEntity tariff = createTariff(tariffData, course);
            log.info("Created tariff: {} - ${}", tariff.getTitle(), tariff.getPriceCents() / 100.0);
        }

        // 5. Load and create Question Bank
        List<QuestionDataDto> questionsData = loadJsonList(basePath + "questions/question-bank.json", new TypeReference<>() {});
        Map<String, QuestionEntity> questionMap = new HashMap<>();
        for (QuestionDataDto questionData : questionsData) {
            QuestionEntity question = createQuestion(questionData, course);
            questionMap.put(questionData.getId(), question);
        }
        log.info("Created {} questions in question bank", questionMap.size());

        // 6. Load and create Tests with Questions
        List<TestDataDto> testsData = loadJsonList(basePath + "tests/tests.json", new TypeReference<>() {});
        for (TestDataDto testData : testsData) {
            LessonEntity lesson = null;
            if (testData.getUnitOrder() != null && testData.getLessonOrder() != null) {
                String lessonKey = testData.getUnitOrder() + "-" + testData.getLessonOrder();
                lesson = lessonMap.get(lessonKey);
            }

            TestEntity test = createTest(testData, course, lesson);

            // Create TestQuestion links
            for (int i = 0; i < testData.getQuestionIds().size(); i++) {
                String questionId = testData.getQuestionIds().get(i);
                QuestionEntity question = questionMap.get(questionId);
                if (question != null) {
                    createTestQuestion(test, question, i + 1);
                } else {
                    log.warn("Question not found: {}", questionId);
                }
            }

            log.info("Created test: {} with {} questions", test.getTitle(), testData.getQuestionIds().size());
        }

        log.info("Successfully loaded all data for course: {}", courseSlug);
    }

    private CourseEntity createCourse(CourseDataDto dto){
        Instant now = Instant.now();

        CourseEntity course = CourseEntity.builder()
                .slug(dto.getSlug())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .snippet(dto.getSnippet())
                .previewVideoUrl(dto.getPreviewVideoUrl())
                .coverUrl(dto.getCoverUrl())
                .discordInviteUrl(dto.getDiscordInviteUrl())
                .status(CourseStatus.valueOf(dto.getStatus()))
                .introVideoUrl(dto.getIntroVideoUrl())
                .courseImageUrl(dto.getCourseImageUrl())
                .createdAt(now)
                .updatedAt(now)
                .build();
        return courseRepository.save(course);
    }

    private UnitEntity createUnit(UnitDataDto dto, CourseEntity course) {
        Instant now = Instant.now();

        UnitEntity unit = UnitEntity.builder()
                .course(course)
                .title(dto.getTitle())
                .snippet(dto.getSnippet())
                .description(dto.getDescription())
                .iconUrl(dto.getIconUrl())
                .orderIndex(dto.getOrder())
                .isPublished(dto.getIsPublished())
                .createdAt(now)
                .updatedAt(now)
                .build();
        return unitRepository.save(unit);
    }

    private LessonEntity createLesson(LessonDataDto dto, UnitEntity unit) {
        Instant releaseAt = null;
        if (dto.getReleaseDate() != null && !dto.getReleaseDate().isEmpty()) {
            releaseAt = LocalDate.parse(dto.getReleaseDate()).atStartOfDay().toInstant(ZoneOffset.UTC);
        }

        LessonEntity lesson = LessonEntity.builder()
                .unit(unit)
                .title(dto.getTitle())
                .orderIndex(dto.getLessonOrder())
                .releaseAt(releaseAt)
                .build();
        return lessonRepository.save(lesson);
    }

    private void createLessonContent(LessonEntity lesson, String videoUrl, String textContent) {

        LessonContentEntity content = LessonContentEntity.builder()
                .lesson(lesson)
                .videoPayload(videoUrl)
                .textPayload(textContent)
                .build();
        lessonContentRepository.save(content);
    }

    private TariffEntity createTariff(TariffDataDto dto, CourseEntity course) {
        TariffEntity tariff = TariffEntity.builder()
                .course(course)
                .title(dto.getTitle())
                .tier(TariffTier.valueOf(dto.getTier()))
                .priceCents(dto.getPriceCents())
                .currency(dto.getCurrency())
                .isActive(dto.getIsActive())
                .payProVariantId(dto.getPayProVariantId())
                .build();
        return tariffRepository.save(tariff);
    }

    private QuestionEntity createQuestion(QuestionDataDto dto, CourseEntity course) throws IOException {
        QuestionEntity question = QuestionEntity.builder()
                .course(course)
                .tagsJson(objectMapper.writeValueAsString(dto.getTags()))
                .type(QuestionType.valueOf(dto.getType()))
                .prompt(dto.getPrompt())
                .imageUrl(dto.getImageUrl())
                .optionsJson(objectMapper.writeValueAsString(dto.getOptionsJson()))
                .answerKeyJson(objectMapper.writeValueAsString(dto.getAnswerKeyJson()))
                .explanation(dto.getExplanation())
                .build();
        return questionRepository.save(question);
    }

    private TestEntity createTest(TestDataDto dto, CourseEntity course, LessonEntity lesson) {
        TestEntity test = TestEntity.builder()
                .course(course)
                .lesson(lesson)
                .type(TestType.valueOf(dto.getType()))
                .title(dto.getTitle())
                .timeLimitSec(dto.getTimeLimitSec())
                .minTier(TariffTier.valueOf(dto.getMinTier()))
                .isPublished(dto.getIsPublished())
                .build();
        return testRepository.save(test);
    }

    private void createTestQuestion(TestEntity test, QuestionEntity question, int orderIndex) {
        TestQuestionEntity testQuestion = TestQuestionEntity.builder()
                .test(test)
                .question(question)
                .orderIndex(orderIndex)
                .build();
        testQuestionRepository.save(testQuestion);
    }

    private <T> T loadJson(String path, Class<T> clazz) throws IOException {
        try (InputStream is = new ClassPathResource(path).getInputStream()) {
            return objectMapper.readValue(is, clazz);

        }
    }

    private <T> T loadJsonList(String path, TypeReference<T> typeRef) throws IOException {
        try (InputStream is = new ClassPathResource(path).getInputStream()) {
            return objectMapper.readValue(is, typeRef);
        }
    }

    private String loadMarkdownFile(String path) throws IOException {
        try (InputStream is = new ClassPathResource(path).getInputStream()) {
            return new String(is.readAllBytes(), StandardCharsets.UTF_8);
        }
    }
}
