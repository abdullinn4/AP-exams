package org.example.apexams.dataloader.dto;

import lombok.Data;
import java.util.List;

@Data
public class QuestionDataDto {
    private String id;
    private List<String> tags;
    private String type;
    private String prompt;
    private String imageUrl;
    private List<OptionDto> optionsJson;
    private Object answerKeyJson;
    private String explanation;

    @Data
    public static class OptionDto {
        private String id;
        private String text;
    }
}
