package org.example.apexams.orders.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Map;

@Slf4j
@Controller
@RequestMapping("/api/v1/paypro")
@RequiredArgsConstructor
public class PayProRedirectController {

    @Value("${app.frontend.url}")
    private String frontendUrl;

    /**
     * Обрабатывает GET/POST redirect от PayPro на success page.
     * PayPro может отправлять как GET с параметрами в URL, так и POST с form data.
     *
     * Scenarios: Fulfilled, Review, Waiting for payment
     */
    @RequestMapping(value = "/success", method = {RequestMethod.GET, RequestMethod.POST})
    public RedirectView handleSuccessRedirect(
            @RequestParam Map<String, String> allParams,
            HttpServletRequest request) {

        try {
            String method = request.getMethod();

            // Извлекаем ключевые параметры
            String checkoutId = allParams.get("x-checkout-id");
            String orderId = allParams.get("ORDER_ID");
            String orderStatus = allParams.get("ORDER_STATUS");
            String customerEmail = allParams.get("CUSTOMER_EMAIL");
            String testMode = allParams.get("TEST_MODE");
            String ipnTypeName = allParams.get("IPN_TYPE_NAME");

            log.info("PayPro success redirect [{}]: checkoutId={}, orderId={}, status={}, email={}, ipnType={}, testMode={}, totalParams={}",
                    method, checkoutId, orderId, orderStatus, customerEmail, ipnTypeName,
                    "1".equals(testMode) ? "TEST" : "LIVE", allParams.size());

            // Валидация обязательных параметров
            if (checkoutId == null || checkoutId.isBlank()) {
                log.error("Missing x-checkout-id in PayPro redirect. Available params: {}", allParams.keySet());
                // Редиректим на success page без параметров - там будет fallback
                return new RedirectView(frontendUrl + "/checkout/success", true);
            }

            // Логируем все параметры для дебага (только в test режиме)
            if ("true".equals(allParams.get("use-test-mode"))) {
                log.debug("All PayPro redirect params: {}", allParams);
            }

            // Редиректим на frontend success page с checkoutId
            String redirectUrl = frontendUrl + "/checkout/success?checkout_id=" + checkoutId;

            log.info("Redirecting to success page: {}", redirectUrl);

            return new RedirectView(redirectUrl, true);

        } catch (Exception e) {
            log.error("Error processing PayPro success redirect: {}", e.getMessage(), e);
            // В случае ошибки редиректим на success page без параметров
            return new RedirectView(frontendUrl + "/checkout/success", true);
        }
    }

    /**
     * Обрабатывает GET/POST redirect от PayPro на cancel page.
     *
     * Scenario: Declined automatically
     */
    @RequestMapping(value = "/cancel", method = {RequestMethod.GET, RequestMethod.POST})
    public RedirectView handleCancelRedirect(
            @RequestParam Map<String, String> allParams,
            HttpServletRequest request) {

        try {
            String method = request.getMethod();
            String checkoutId = allParams.get("x-checkout-id");
            String testMode = allParams.get("TEST_MODE");
            String actionReason = allParams.get("ACTION_REASON");

            log.info("PayPro cancel redirect [{}]: checkoutId={}, reason={}, testMode={}, totalParams={}",
                    method, checkoutId, actionReason, "1".equals(testMode) ? "TEST" : "LIVE", allParams.size());

            // Логируем все параметры для дебага (только в test режиме)
            if ("true".equals(allParams.get("use-test-mode"))) {
                log.debug("All PayPro cancel params: {}", allParams);
            }

            return new RedirectView(frontendUrl + "/checkout/cancel", true);

        } catch (Exception e) {
            log.error("Error processing PayPro cancel redirect: {}", e.getMessage(), e);
            return new RedirectView(frontendUrl + "/checkout/cancel", true);
        }
    }
}