package org.example.apexams.tariffs.service;

import org.example.apexams.tariffs.dto.CreateTariffRequest;
import org.example.apexams.tariffs.dto.TariffResponse;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.entity.enums.TariffTier;

import java.util.List;
import java.util.UUID;

public interface TariffService {
    TariffEntity createTariff(CreateTariffRequest dto);
    TariffResponse getTariff(UUID id);
    List<TariffResponse> getAllTariffs();
    List<TariffResponse> getByCourseId(UUID courseId);

    // Получение активных тарифов курса (для checkout)
    List<TariffResponse> getActiveTariffsByCourse(UUID courseId);

    // Получение тарифа по курсу и tier (для upgrade)
    TariffResponse getTariffByCourseAndTier(UUID courseId, TariffTier tier);

    // Обновление тарифа (админ)
    void updateTariff(UUID id, CreateTariffRequest dto);

    // Активация/деактивация тарифа (админ)
    void activateTariff(UUID id);
    void deactivateTariff(UUID id);

    // Удаление тарифа (админ)
    void deleteTariff(UUID id);

    // Проверка существования тарифа для курса
    boolean existsTariffForCourse(UUID courseId, TariffTier tier);
}
