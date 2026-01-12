package org.example.apexams.email.service;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Slf4j
@Service
public class EmailServiceImpl implements EmailService {

    @Value("${sendgrid.api.key}")
    private String sendGridApiKey;

    @Value("${sendgrid.from.email}")
    private String fromEmail;

    @Value("${sendgrid.from.name}")
    private String fromName;

    @Value("${app.frontend.url}")
    private String frontendUrl;

    @Override
    public void sendPasswordEmail(String toEmail, String password) {
        String subject = "Your AP Exams Platform Password";
        String htmlBody = buildPasswordEmailHtml(toEmail, password);
        sendEmail(toEmail, subject, htmlBody);
    }

    @Override
    public void sendWelcomeEmail(String toEmail, String courseName) {
        String subject = "Welcome to " + courseName + "!";
        String htmlBody = buildWelcomeEmailHtml(courseName);
        sendEmail(toEmail, subject, htmlBody);
    }

    @Override
    public void sendNewPasswordEmail(String email, String password) {
        String subject = "Your New Password";
        String htmlBody = buildNewPasswordEmailHtml(email, password);
        sendEmail(email, subject, htmlBody);
    }

    @Override
    public void sendPurchaseConfirmationEmail(String toEmail, String courseName) {
        String subject = "Course Purchase Confirmed - " + courseName;
        String htmlBody = buildPurchaseConfirmationHtml(courseName);
        sendEmail(toEmail, subject, htmlBody);
    }

    private void sendEmail(String toEmail, String subject, String htmlBody) {
        Email from = new Email(fromEmail, fromName);
        Email to = new Email(toEmail);
        Content content = new Content("text/html", htmlBody);
        Mail mail = new Mail(from, subject, to, content);

        SendGrid sg = new SendGrid(sendGridApiKey);
        Request request = new Request();

        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());

            Response response = sg.api(request);

            if (response.getStatusCode() >= 200 && response.getStatusCode() < 300) {
                log.info("Email sent successfully to: {}", toEmail);
            } else {
                log.error("SendGrid error. Status: {}, Body: {}",
                        response.getStatusCode(), response.getBody());
                throw new RuntimeException("Failed to send email");
            }

        } catch (IOException e) {
            log.error("Failed to send email to {}: {}", toEmail, e.getMessage());
            throw new RuntimeException("Failed to send email", e);
        }
    }

    private String buildPasswordEmailHtml(String email, String password) {
        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>" +
                        "<div style='background-color: #f8f9fa; padding: 30px; border-radius: 10px;'>" +
                        "<h2 style='color: #333; margin-top: 0;'>Welcome to AP Exams Platform!</h2>" +
                        "<p style='color: #666; font-size: 16px;'>Your account has been created successfully.</p>" +
                        "<div style='background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;'>" +
                        "<p style='margin: 5px 0;'><strong>Email:</strong> %s</p>" +
                        "<p style='margin: 5px 0;'><strong>Password:</strong> <code style='background-color: #f0f0f0; padding: 5px 10px; border-radius: 3px; font-size: 14px;'>%s</code></p>" +
                        "</div>" +
                        "<a href='%s/login' style='display: inline-block; background-color: #4CAF50; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 10px;'>Login Now</a>" +
                        "<p style='color: #999; font-size: 12px; margin-top: 30px;'>Please keep this email and password safe.</p>" +
                        "</div>" +
                        "</body>" +
                        "</html>",
                email, password, frontendUrl
        );
    }

    private String buildWelcomeEmailHtml(String courseName) {
        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>" +
                        "<div style='background-color: #f8f9fa; padding: 30px; border-radius: 10px;'>" +
                        "<h2 style='color: #333; margin-top: 0;'>🎉 Congratulations!</h2>" +
                        "<p style='color: #666; font-size: 16px;'>You've successfully enrolled in <strong>%s</strong>.</p>" +
                        "<p style='color: #666; font-size: 16px;'>Start your learning journey now and achieve your goals!</p>" +
                        "<a href='%s/app/courses' style='display: inline-block; background-color: #2196F3; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 10px;'>Start Learning</a>" +
                        "<p style='color: #999; font-size: 12px; margin-top: 30px;'>Good luck with your studies! 🚀</p>" +
                        "</div>" +
                        "</body>" +
                        "</html>",
                courseName, frontendUrl
        );
    }

    private String buildNewPasswordEmailHtml(String email, String newPassword) {
        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>" +
                        "<div style='background-color: #f8f9fa; padding: 30px; border-radius: 10px;'>" +
                        "<h2 style='color: #333; margin-top: 0;'>Welcome to AP Exams Platform!</h2>" +
                        "<p style='color: #666; font-size: 16px;'>Your password has been changed successfully.</p>" +
                        "<div style='background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;'>" +
                        "<p style='margin: 5px 0;'><strong>Email:</strong> %s</p>" +
                        "<p style='margin: 5px 0;'><strong>Password:</strong> <code style='background-color: #f0f0f0; padding: 5px 10px; border-radius: 3px; font-size: 14px;'>%s</code></p>" +
                        "</div>" +
                        "<a href='%s/login' style='display: inline-block; background-color: #4CAF50; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 10px;'>Login Now</a>" +
                        "<p style='color: #999; font-size: 12px; margin-top: 30px;'>Please keep this email and password safe.</p>" +
                        "</div>" +
                        "</body>" +
                        "</html>",
                email, newPassword, frontendUrl
        );
    }

    private String buildPurchaseConfirmationHtml(String courseName) {
        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>" +
                        "<div style='background-color: #f8f9fa; padding: 30px; border-radius: 10px;'>" +
                        "<h2 style='color: #333; margin-top: 0;'>🎉 Purchase Successful!</h2>" +
                        "<p style='color: #666; font-size: 16px;'>Thank you for your purchase!</p>" +
                        "<p style='color: #666; font-size: 16px;'>You've successfully enrolled in <strong>%s</strong>.</p>" +
                        "<div style='background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;'>" +
                        "<p style='margin: 5px 0; color: #333;'>✅ Payment confirmed</p>" +
                        "<p style='margin: 5px 0; color: #333;'>✅ Access granted to course materials</p>" +
                        "<p style='margin: 5px 0; color: #333;'>✅ You can now start learning</p>" +
                        "</div>" +
                        "<a href='%s/app/courses' style='display: inline-block; background-color: #2196F3; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 10px;'>Start Learning</a>" +
                        "<p style='color: #999; font-size: 12px; margin-top: 30px;'>Use your existing credentials to login. Good luck! 🚀</p>" +
                        "</div>" +
                        "</body>" +
                        "</html>",
                courseName, frontendUrl
        );
    }
}