package com.sysinfo.dpi.config.auditing;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * @author Ali Bouali
 * @since 05.05.22
 */
@EnableJpaAuditing
@Configuration
public class JpaAuditingConfig {

  @Bean
  public AuditorAware<String> auditorAware() {
    return new AuditorAwareImpl();
  }

}
