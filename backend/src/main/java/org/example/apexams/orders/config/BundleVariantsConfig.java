package org.example.apexams.orders.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
@ConfigurationProperties(prefix = "lemonsqueezy.bundles")
@Getter
@Setter
public class BundleVariantsConfig {
    private Map<Integer, String> variants;

    public String getVariantIdForItemCount(int itemCount) {
        return variants.get(itemCount);
    }
}
