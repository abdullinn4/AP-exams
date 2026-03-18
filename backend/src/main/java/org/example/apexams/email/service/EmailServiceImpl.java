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

    @Override
    public void sendPartnershipNotification(String email) {
        String subject = "🚀 Make $30 Per Sale: Our Affiliate Program Just Launched";
        String htmlBody = buildPartnershipNotificationHtml(email);
        sendEmail(email, subject, htmlBody);
    }

    @Override
    public void sendFreeMaterial(String email, String materialSlug) {
        String materialName = getMaterialNameBySlug(materialSlug);
        String materialLink = getMaterialLinkBySlug(materialSlug);

        String subject = "Your Free " + materialName + " from SmashAP 🎁";
        String htmlBody = buildFreeMaterialEmailHtml(materialName, materialLink);
        sendEmail(email, subject, htmlBody);
    }

    private String buildFreeMaterialEmailHtml(String materialName, String materialLink) {
        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head>" +
                        "<meta charset='UTF-8'>" +
                        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
                        "</head>" +
                        "<body style='font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;'>" +
                        "<table width='100%%' cellpadding='0' cellspacing='0' border='0' style='background-color: #f5f5f5;'>" +
                        "<tr><td align='center' style='padding: 40px 20px;'>" +
                        "<table width='600' cellpadding='0' cellspacing='0' border='0' style='background-color: white; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);'>" +
                        "<tr><td style='padding: 40px;'>" +

                        // Header with logo
                        "<div style='text-align: center; margin-bottom: 30px;'>" +
                        "<div style='font-size: 28px; font-weight: 700; background: linear-gradient(135deg, #7C3AED 0%%, #5B21B6 100%%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'>SmashAP</div>" +
                        "</div>" +

                        // Greeting
                        "<div style='color: #333; font-size: 16px; line-height: 1.8;'>" +
                        "<div style='font-size: 18px; font-weight: 600; margin-bottom: 20px;'>Hey!</div>" +

                        "<p style='margin: 0 0 16px 0;'>Thanks for grabbing the <strong>%s</strong> from SmashAP 🎉</p>" +

                        "<p style='margin: 0 0 16px 0;'>We made this specifically to help you start cooking on your AP exams. This is just a taste though… our full prep courses go way harder and will actually get you the 4s and 5s you need.</p>" +

                        // Highlight box
                        "<div style='background-color: #f3f4f6; padding: 20px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #7C3AED;'>" +
                        "<p style='margin: 0;'><strong>Quick question</strong> so we can send you the right stuff — which AP are you taking? Just reply with the subject(s).</p>" +
                        "</div>" +

                        "<p style='margin: 0 0 16px 0;'>Also, since you're already here… we got you.<br>Use code below to get <strong>10%% OFF</strong> any of our full courses.</p>" +

                        // Promo code
                        "<div style='font-size: 20px; font-weight: 700; color: #7C3AED; text-align: center; padding: 15px; background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%%, rgba(91, 33, 182, 0.1) 100%%); border-radius: 8px; margin: 20px 0;'>" +
                        "SMASH10AP" +
                        "</div>" +

                        // CTA Button
                        "<div style='text-align: center; margin: 25px 0;'>" +
                        "<a href='%s' style='display: inline-block; background: linear-gradient(135deg, #7C3AED 0%%, #5B21B6 100%%); color: white; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-weight: 600; font-size: 16px;'>Link to your free stuff →</a>" +
                        "</div>" +

                        "<p style='margin: 30px 0 0 0;'>Let's smash these APs together 💪</p>" +

                        // Signature
                        "<div style='margin-top: 30px; font-weight: 600; color: #1a1a1a;'>" +
                        "Talk soon,<br>SmashAP Team" +
                        "</div>" +
                        "</div>" +

                        // Footer
                        "<div style='margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; text-align: center;'>" +
                        "<p style='margin: 0 0 8px 0;'>© 2026 SmashAP. All rights reserved.</p>" +
                        "<p style='margin: 0;'>You're receiving this because you requested free materials from SmashAP.</p>" +
                        "</div>" +

                        "</td></tr></table>" +
                        "</td></tr></table>" +
                        "</body></html>",
                materialName, materialLink
        );
    }

    private String getMaterialNameBySlug(String slug) {
        return switch (slug) {
            case "one-page-cram-sheet-bundle" -> "The \"One-Page Cram Sheet\" Bundle";
            case "ap-score-calculator" -> "AP Score Calculator";
            case "college-admissions-ap-checklist" -> "College Admissions AP Checklist";
            default -> "Free Material";
        };
    }

    private String getMaterialLinkBySlug(String slug) {
        return switch (slug) {
            case "one-page-cram-sheet-bundle" ->
                    "https://docs.google.com/document/d/1yx47BzafOdnqgmdBVtSW-bkLlIEEA4pn20cMhcipcyY/edit?usp=sharing";
            case "ap-score-calculator" ->
                    "https://docs.google.com/spreadsheets/d/1G6ZR10d7td6SAgCeuXEYrRXqipFzkrmAn1y7FstVNF4/edit?usp=sharing";
            case "college-admissions-ap-checklist" ->
                    "https://docs.google.com/spreadsheets/d/1wk2N9-ilTljpzRGnvYI0KY7yJoIs5MNxrml8budfnZw/edit?usp=sharing";
            default -> "https://smashap.com";
        };
    }

    private String buildPartnershipNotificationHtml(String email) {
        String affiliateLink = "http://cc.payproglobal.com/AffiliateSignup/8DE835912B6DFFE";

        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; margin: 0; padding: 0; background-color: #f8f9fa;'>" +
                        "<table width='100%%' cellpadding='0' cellspacing='0' border='0' style='background-color: #f8f9fa;'>" +
                        "<tr><td align='center' style='padding: 40px 20px;'>" +
                        "<table width='600' cellpadding='0' cellspacing='0' border='0' style='background-color: white; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'>" +
                        "<tr><td style='padding: 40px;'>" +

                        "<!-- Greeting -->" +
                        "<p style='color: #1a1a1a; font-size: 18px; font-weight: 600; margin: 0 0 24px 0;'>Hey Buddy,</p>" +

                        "<p style='color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;'>" +
                        "You know our AP prep courses help students crush their exams. Now, I want to help <strong>you</strong> get paid for spreading the word.</p>" +

                        "<p style='color: #1a1a1a; font-size: 18px; font-weight: 700; margin: 0 0 24px 0;'>" +
                        "Introducing the Official SmashAP Affiliate Program.</p>" +

                        "<!-- Deal Box -->" +
                        "<div style='background: linear-gradient(135deg, #7C3AED 0%%, #9333EA 100%%); border-radius: 12px; padding: 24px; margin: 24px 0;'>" +
                        "<p style='color: white; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;'>Here's the deal:</p>" +
                        "<ul style='color: white; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px;'>" +
                        "<li>You share your unique link with your audience.</li>" +
                        "<li>Someone buys a course (<strong>$99</strong>).</li>" +
                        "<li>You earn <strong>$30</strong>. Simple as that.</li>" +
                        "</ul>" +
                        "</div>" +

                        "<p style='color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;'>" +
                        "No inventory. No customer support. Just pure commission on every sale.</p>" +

                        "<hr style='border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;'>" +

                        "<!-- How to Join -->" +
                        "<h2 style='color: #1a1a1a; font-size: 22px; font-weight: 700; margin: 0 0 20px 0;'>" +
                        "How to Join (Takes 2 Minutes):</h2>" +

                        "<p style='color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;'>" +
                        "We partnered with <strong>PayPro</strong> to handle everything securely. Here's how to get started:</p>" +

                        "<div style='background-color: #f7fafc; padding: 24px; border-radius: 12px; border-left: 4px solid #7C3AED; margin: 20px 0;'>" +
                        "<p style='color: #2d3748; font-size: 16px; margin: 0 0 16px 0;'>" +
                        "<strong>1. Click here to sign up:</strong><br>" +
                        "<a href='%s' style='color: #7C3AED; text-decoration: underline; font-weight: 600;'>%s</a></p>" +

                        "<p style='color: #2d3748; font-size: 16px; margin: 0 0 16px 0;'>" +
                        "<strong>2. Fill out the form:</strong></p>" +
                        "<ul style='color: #4a5568; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0; padding-left: 20px;'>" +
                        "<li>If you have a <strong>website</strong>, drop the link.</li>" +
                        "<li>If you don't have a website—<strong>no problem!</strong> Just paste your <strong>Instagram, TikTok, or YouTube link</strong> in that field. We just want to see how you connect with your audience.</li>" +
                        "</ul>" +

                        "<p style='color: #2d3748; font-size: 16px; margin: 0;'>" +
                        "<strong>3. We'll approve you ASAP.</strong><br>" +
                        "<span style='color: #4a5568;'>Once you submit, we'll review and activate your account within 24 hours. You'll get an email confirmation, and then you're ready to start earning.</span></p>" +
                        "</div>" +

                        "<p style='color: #1a1a1a; font-size: 17px; font-weight: 600; margin: 32px 0 24px 0; text-align: center;'>" +
                        "The best time to start was yesterday. The second best time is right now.</p>" +

                        "<!-- CTA Button -->" +
                        "<div style='text-align: center; margin: 32px 0;'>" +
                        "<a href='%s' style='display: inline-block; background: linear-gradient(135deg, #7C3AED 0%%, #9333EA 100%%); color: white; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 18px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);'>" +
                        "👉 Click Here to Become an Affiliate →</a>" +
                        "</div>" +

                        "<p style='color: #4a5568; font-size: 16px; line-height: 1.6; margin: 32px 0 0 0;'>" +
                        "Let's help students succeed (and make some money doing it)!</p>" +

                        "<!-- Signature -->" +
                        "<p style='color: #1a1a1a; font-size: 16px; margin: 40px 0 0 0;'>" +
                        "Cheers,<br><br>" +
                        "<strong>Amelia</strong><br>" +
                        "<span style='color: #718096; font-size: 14px;'>Affiliate Assistant / SmashAP</span></p>" +

                        "<hr style='border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;'>" +

                        "<p style='color: #718096; font-size: 14px; font-style: italic; margin: 0;'>" +
                        "P.S. Got friends who might be interested? Forward this email to them. The more the merrier!</p>" +

                        "</td></tr></table>" +
                        "</td></tr></table>" +
                        "</body></html>",
                affiliateLink, affiliateLink, affiliateLink
        );
    }

    private String buildPurchaseConfirmationHtml(List<String> courseNames) {
        StringBuilder coursesHtml = new StringBuilder();
        for (String courseName : courseNames) {
            coursesHtml.append(String.format(
                    "<li style='padding: 14px 18px; background-color: #f7fafc; margin: 8px 0; border-radius: 8px; border-left: 3px solid #7C3AED; color: #2d3748; font-size: 16px; font-weight: 600;'>%s</li>",
                    courseName
            ));
        }

        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; margin: 0; padding: 0; background-color: #f8f9fa;'>" +
                        "<table width='100%%' cellpadding='0' cellspacing='0' border='0' style='background-color: #f8f9fa;'>" +
                        "<tr><td align='center' style='padding: 40px 20px;'>" +
                        "<table width='600' cellpadding='0' cellspacing='0' border='0' style='background-color: white; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'>" +
                        "<tr><td style='padding: 40px;'>" +

                        "<h2 style='color: #1a1a1a; font-size: 28px; font-weight: 800; margin: 0 0 16px 0;'>🎉 Purchase Successful!</h2>" +
                        "<p style='color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;'>Thank you for your purchase! You now have access to:</p>" +

                        "<ul style='list-style: none; padding: 0; margin: 0 0 24px 0;'>%s</ul>" +

                        "<div style='background: linear-gradient(135deg, #7C3AED 0%%, #9333EA 100%%); padding: 24px; border-radius: 12px; margin: 24px 0;'>" +
                        "<p style='margin: 0 0 16px 0; color: white; font-size: 16px; font-weight: 600;'>Start learning now:</p>" +
                        "<div style='text-align: center;'>" +
                        "<a href='%s/dashboard' style='display: inline-block; background-color: white; color: #7C3AED; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px;'>Go to My Courses →</a>" +
                        "</div></div>" +

                        "<p style='color: #718096; font-size: 14px; margin-top: 32px; text-align: center;'>If you have any questions, contact us at info@smashap.com</p>" +

                        "</td></tr></table>" +
                        "</td></tr></table>" +
                        "</body></html>",
                coursesHtml,
                frontendUrl
        );
    }


    private String buildPasswordEmailHtml(String email, String password) {
        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; margin: 0; padding: 0; background-color: #f8f9fa;'>" +
                        "<table width='100%%' cellpadding='0' cellspacing='0' border='0' style='background-color: #f8f9fa;'>" +
                        "<tr><td align='center' style='padding: 40px 20px;'>" +
                        "<table width='600' cellpadding='0' cellspacing='0' border='0' style='background-color: white; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'>" +
                        "<tr><td style='padding: 40px;'>" +

                        "<h2 style='color: #1a1a1a; font-size: 28px; font-weight: 800; margin: 0 0 16px 0;'>Welcome to SmashAP! 🎉</h2>" +
                        "<p style='color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;'>Your account has been created successfully.</p>" +

                        "<div style='background-color: #f7fafc; padding: 24px; border-radius: 12px; border-left: 4px solid #7C3AED; margin: 20px 0;'>" +
                        "<p style='margin: 0 0 12px 0; color: #2d3748; font-size: 16px;'><strong>Email:</strong> %s</p>" +
                        "<p style='margin: 0; color: #2d3748; font-size: 16px;'><strong>Password:</strong> <code style='background-color: #edf2f7; padding: 8px 12px; border-radius: 6px; font-size: 15px; font-family: \"Source Code Pro\", monospace; color: #7C3AED; font-weight: 600;'>%s</code></p>" +
                        "</div>" +

                        "<div style='text-align: center; margin: 32px 0;'>" +
                        "<a href='%s/login' style='display: inline-block; background: linear-gradient(135deg, #7C3AED 0%%, #9333EA 100%%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);'>Login Now →</a>" +
                        "</div>" +

                        "<p style='color: #718096; font-size: 14px; margin-top: 32px; text-align: center;'>Please keep this email and password safe.</p>" +

                        "</td></tr></table>" +
                        "</td></tr></table>" +
                        "</body></html>",
                email, password, frontendUrl
        );
    }

    private String buildWelcomeEmailHtml(String courseName) {
        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; margin: 0; padding: 0; background-color: #f8f9fa;'>" +
                        "<table width='100%%' cellpadding='0' cellspacing='0' border='0' style='background-color: #f8f9fa;'>" +
                        "<tr><td align='center' style='padding: 40px 20px;'>" +
                        "<table width='600' cellpadding='0' cellspacing='0' border='0' style='background-color: white; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'>" +
                        "<tr><td style='padding: 40px;'>" +

                        "<h2 style='color: #1a1a1a; font-size: 28px; font-weight: 800; margin: 0 0 16px 0;'>🎉 Congratulations!</h2>" +
                        "<p style='color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;'>You've successfully enrolled in <strong style='color: #7C3AED;'>%s</strong>.</p>" +
                        "<p style='color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;'>Start your learning journey now and achieve your goals!</p>" +

                        "<div style='text-align: center;'>" +
                        "<a href='%s/dashboard' style='display: inline-block; background: linear-gradient(135deg, #7C3AED 0%%, #9333EA 100%%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);'>Start Learning →</a>" +
                        "</div>" +

                        "<p style='color: #718096; font-size: 14px; margin-top: 32px; text-align: center;'>Good luck with your studies! 🚀</p>" +

                        "</td></tr></table>" +
                        "</td></tr></table>" +
                        "</body></html>",
                courseName, frontendUrl
        );
    }

    private String buildNewPasswordEmailHtml(String email, String newPassword) {
        return String.format(
                "<!DOCTYPE html>" +
                        "<html>" +
                        "<head><meta charset='UTF-8'></head>" +
                        "<body style='font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; margin: 0; padding: 0; background-color: #f8f9fa;'>" +
                        "<table width='100%%' cellpadding='0' cellspacing='0' border='0' style='background-color: #f8f9fa;'>" +
                        "<tr><td align='center' style='padding: 40px 20px;'>" +
                        "<table width='600' cellpadding='0' cellspacing='0' border='0' style='background-color: white; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'>" +
                        "<tr><td style='padding: 40px;'>" +

                        "<h2 style='color: #1a1a1a; font-size: 28px; font-weight: 800; margin: 0 0 16px 0;'>Password Changed Successfully! 🔐</h2>" +
                        "<p style='color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;'>Your password has been changed successfully.</p>" +

                        "<div style='background-color: #f7fafc; padding: 24px; border-radius: 12px; border-left: 4px solid #7C3AED; margin: 20px 0;'>" +
                        "<p style='margin: 0 0 12px 0; color: #2d3748; font-size: 16px;'><strong>Email:</strong> %s</p>" +
                        "<p style='margin: 0; color: #2d3748; font-size: 16px;'><strong>New Password:</strong> <code style='background-color: #edf2f7; padding: 8px 12px; border-radius: 6px; font-size: 15px; font-family: \"Source Code Pro\", monospace; color: #7C3AED; font-weight: 600;'>%s</code></p>" +
                        "</div>" +

                        "<div style='text-align: center; margin: 32px 0;'>" +
                        "<a href='%s/login' style='display: inline-block; background: linear-gradient(135deg, #7C3AED 0%%, #9333EA 100%%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);'>Login Now →</a>" +
                        "</div>" +

                        "<p style='color: #718096; font-size: 14px; margin-top: 32px; text-align: center;'>Please keep this email and password safe.</p>" +

                        "</td></tr></table>" +
                        "</td></tr></table>" +
                        "</body></html>",
                email, newPassword, frontendUrl
        );
    }

}