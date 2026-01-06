package org.example.apexams.tariffs.service;

import org.example.apexams.tariffs.dto.CreateTariffRequest;
import org.example.apexams.tariffs.dto.TariffResponse;
import org.example.apexams.tariffs.entity.TariffEntity;

import java.util.List;
import java.util.UUID;

public interface TariffService {
    TariffEntity createTariff(CreateTariffRequest dto);
    TariffResponse getTariff(UUID id);
    List<TariffResponse> getAllTariffs();
    List<TariffResponse> getByCourseId(UUID courseId);
}
