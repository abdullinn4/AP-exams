package org.example.apexams.email.service;

import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${app.frontend.url}")
    private String frontendUrl;

    @Override
    public void sendPasswordEmail(String toEmail, String password) {
        String subject = "Your SmashAP Password";
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
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail, "SmashAP");
            helper.setTo(toEmail);
            helper.setSubject(subject);
            helper.setText(htmlBody, true); // true = HTML

            mailSender.send(message);

            log.info("Email sent successfully to: {}", toEmail);

        } catch (Exception e) {
            log.error("Failed to send email to {}: {}", toEmail, e.getMessage(), e);
            throw new RuntimeException("Failed to send email", e);
        }
    }

    @Override
    public void sendPurchaseConfirmationEmail(String toEmail, List<String> courseNames) {
        String subject = courseNames.size() == 1
                ? "Course Purchase Confirmed - " + courseNames.getFirst()
                : "Courses Purchase Confirmed - " + courseNames.size() + " courses";

        String htmlBody = buildPurchaseConfirmationHtml(courseNames);
        sendEmail(toEmail, subject, htmlBody);
    }

    private String buildPurchaseConfirmationHtml(List<String> courseNames) {
        StringBuilder coursesHtml = new StringBuilder();
        for (String courseName : courseNames) {
            coursesHtml.append(String.format(
                    "<li style='padding: 10px; background-color: #f8f9fa; margin: 5px 0; border-radius: 5px;'>%s</li>",
                    courseName
            ));
        }

        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>" +
                        "<div style='background-color: #f8f9fa; padding: 30px; border-radius: 10px;'>" +
                        "<h2 style='color: #333; margin-top: 0;'>🎉 Purchase Successful!</h2>" +
                        "<p style='color: #666; font-size: 16px;'>Thank you for your purchase! You now have access to:</p>" +
                        "<ul style='list-style: none; padding: 0;'>%s</ul>" +
                        "<div style='margin-top: 30px; padding: 20px; background-color: white; border-radius: 5px;'>" +
                        "<p style='margin: 0; color: #666;'>Start learning now:</p>" +
                        "<a href='%s/courses' style='display: inline-block; margin-top: 15px; padding: 12px 30px; background-color: #7C3AED; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;'>Go to My Courses</a>" +
                        "</div>" +
                        "<p style='color: #999; font-size: 14px; margin-top: 30px;'>If you have any questions, contact us at info@smashap.com</p>" +
                        "</div>" +
                        "</body>" +
                        "</html>",
                coursesHtml,
                frontendUrl
        );
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