package org.example.apexams.stats.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.moduleProgress.entity.enums.ModuleProgressStatus;
import org.example.apexams.moduleProgress.repo.ModuleProgressRepository;
import org.example.apexams.stats.dto.MockExamStats;
import org.example.apexams.stats.dto.ModuleTestStats;
import org.example.apexams.stats.dto.OverallStats;
import org.example.apexams.stats.dto.StatsResponse;
import org.example.apexams.tests.entity.TestAttemptEntity;
import org.example.apexams.tests.entity.TestEntity;
import org.example.apexams.tests.entity.enums.TestType;
import org.example.apexams.tests.repo.TestAttemptRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class StatsServiceImpl implements StatsService {
    private final TestAttemptRepository testAttemptRepository;
    private final ModuleProgressRepository moduleProgressRepository;

    @Override
    @Transactional(readOnly = true)
    public StatsResponse getStats(UUID userId) {
        List<TestAttemptEntity> allAttempts = testAttemptRepository.findAll()
                .stream()
                .filter(a -> a.getUser().getId().equals(userId))
                .filter(a -> a.getFinishedAt() != null)
                .toList();

        List<ModuleTestStats> moduleTests = getModuleTestStats(allAttempts);
        List<MockExamStats> mockExams = getMockExamStats(allAttempts);
        OverallStats overall = getOverallStats(userId, allAttempts);

        return new StatsResponse(moduleTests, mockExams, overall);
    }

    private List<ModuleTestStats> getModuleTestStats(List<TestAttemptEntity> allAttempts) {
        Map<UUID, List<TestAttemptEntity>> groupedByTest = allAttempts.stream()
                .filter(a -> a.getTest().getType() == TestType.MODULE_TEST)
                .collect(Collectors.groupingBy(a -> a.getTest().getId()));

        return groupedByTest.entrySet().stream()
                .map(entry -> {
                    UUID testId = entry.getKey();
                    List<TestAttemptEntity> attempts = entry.getValue();
                    TestEntity test = attempts.getFirst().getTest();

                    double bestScore = attempts.stream()
                            .mapToDouble(TestAttemptEntity::getScore)
                            .max()
                            .orElse(0.0);

                    TestAttemptEntity lastAttempt = attempts.stream()
                            .max(Comparator.comparing(TestAttemptEntity::getStartedAt))
                            .orElse(null);

                    return new ModuleTestStats(
                            testId,
                            test.getTitle(),
                            test.getCourse().getTitle(),
                            attempts.size(),
                            bestScore,
                            lastAttempt != null ? lastAttempt.getScore() : 0.0,
                            lastAttempt != null ? lastAttempt.getFinishedAt() : null
                    );
                })
                .sorted(Comparator.comparing(ModuleTestStats::lastAttemptAt).reversed())
                .collect(Collectors.toList());
    }

    private List<MockExamStats> getMockExamStats(List<TestAttemptEntity> allAttempts) {
        Map<UUID, List<TestAttemptEntity>> groupedByTest = allAttempts.stream()
                .filter(a -> a.getTest().getType() == TestType.MOCK_EXAM)
                .collect(Collectors.groupingBy(a -> a.getTest().getId()));

        return groupedByTest.entrySet().stream()
                .map(entry -> {
                    UUID testId = entry.getKey();
                    List<TestAttemptEntity> attempts = entry.getValue();
                    TestEntity test = attempts.getFirst().getTest();

                    double bestScore = attempts.stream()
                            .mapToDouble(TestAttemptEntity::getScore)
                            .max()
                            .orElse(0.0);

                    TestAttemptEntity lastAttempt = attempts.stream()
                            .max(Comparator.comparing(TestAttemptEntity::getStartedAt))
                            .orElse(null);

                    return new MockExamStats(
                            testId,
                            test.getTitle(),
                            test.getCourse().getTitle(),
                            attempts.size(),
                            bestScore,
                            lastAttempt != null ? lastAttempt.getScore() : 0.0,
                            lastAttempt != null ? lastAttempt.getFinishedAt() : null
                    );
                })
                .sorted(Comparator.comparing(MockExamStats::lastAttemptAt).reversed())
                .collect(Collectors.toList());
    }

    private OverallStats getOverallStats(UUID userId, List<TestAttemptEntity> allAttempts) {
        long totalModulesCompleted = moduleProgressRepository.findAllByUserId(userId)
                .stream()
                .filter(p -> p.getStatus() == ModuleProgressStatus.COMPLETED)
                .count();

        long totalModuleTests = allAttempts.stream()
                .filter(a -> a.getTest().getType() == TestType.MODULE_TEST)
                .count();

        long totalMockExams = allAttempts.stream()
                .filter(a -> a.getTest().getType() == TestType.MOCK_EXAM)
                .count();

        double avgModuleTestScore = allAttempts.stream()
                .filter(a -> a.getTest().getType() == TestType.MODULE_TEST)
                .mapToDouble(TestAttemptEntity::getScore)
                .average()
                .orElse(0.0);

        double avgMockExamScore = allAttempts.stream()
                .filter(a -> a.getTest().getType() == TestType.MOCK_EXAM)
                .mapToDouble(TestAttemptEntity::getScore)
                .average()
                .orElse(0.0);

        return new OverallStats(
                (int) totalModulesCompleted,
                (int) totalModuleTests,
                (int) totalMockExams,
                avgModuleTestScore,
                avgMockExamScore
        );
    }
}
