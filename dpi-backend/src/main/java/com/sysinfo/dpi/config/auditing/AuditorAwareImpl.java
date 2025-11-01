package com.sysinfo.dpi.config.auditing;

import java.util.Optional;
import lombok.extern.slf4j.Slf4j;
import org.keycloak.KeycloakPrincipal;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * @author Ali Bouali
 * @since 05.05.22
 */
@Slf4j
public class AuditorAwareImpl implements AuditorAware<String> {

  @Override
  public Optional<String> getCurrentAuditor() {
    String userId = ((KeycloakPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getName();
    log.debug("Principal ID : " + userId);
    return Optional.ofNullable(userId);
  }
}
