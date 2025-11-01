package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.PREFERENCES_ROUTE;

import com.sysinfo.dpi.patient.dto.PreferenceDto;
import com.sysinfo.dpi.patient.services.PreferenceService;
import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Ali Bouali
 * @since 20.04.22
 */

@RestController
@RequestMapping(PREFERENCES_ROUTE)
@RequiredArgsConstructor
@Api("Preferences cases")
public class PreferenceController {

  private final PreferenceService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody PreferenceDto preference
  ) {
    return ResponseEntity.ok(service.save(preference));
  }

  @GetMapping("/{preferenceId}")
  public ResponseEntity<PreferenceDto> findById(
      @PathVariable("preferenceId") Integer preferenceId
  ) {
    return ResponseEntity.ok(service.findById(preferenceId));
  }

  @GetMapping("/patient/{patientId}")
  public ResponseEntity<List<PreferenceDto>> findAllByPatient(
      @PathVariable("patientId") Integer patientId
  ) {
    return ResponseEntity.ok(service.findAllByPatient(patientId));
  }

  @DeleteMapping("/{preferenceId}")
  public ResponseEntity<String> delete(
      @PathVariable("preferenceId") Integer preferenceId
  ) {
    service.delete(preferenceId);
    return ResponseEntity.ok("deleted");
  }
}
