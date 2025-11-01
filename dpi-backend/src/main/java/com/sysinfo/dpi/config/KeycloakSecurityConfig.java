package com.sysinfo.dpi.config;

import org.keycloak.adapters.springsecurity.KeycloakConfiguration;
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;

/**
 * @author Ali Bouali
 * @since 26.05.22
 */
@KeycloakConfiguration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class KeycloakSecurityConfig extends KeycloakWebSecurityConfigurerAdapter {

  @Override
  protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
    return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
  }

  public void configure(AuthenticationManagerBuilder auth) {
    auth.authenticationProvider(keycloakAuthenticationProvider());
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    super.configure(http);
    http
        .csrf()
        .disable()
        .cors()
        .and()
        .authorizeRequests()
        .anyRequest()
        .authenticated();
  }
}
