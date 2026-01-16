package org.example.apexams.stats.service;

import org.example.apexams.stats.dto.StatsResponse;

import java.util.UUID;

public interface StatsService {
    StatsResponse getStats(UUID userId);
}
