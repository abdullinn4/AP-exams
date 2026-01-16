package org.example.apexams.dashboard.service;

import org.example.apexams.dashboard.dto.DashboardResponse;

import java.util.UUID;

public interface DashboardService {
    DashboardResponse getDashboard(UUID userId);
}
