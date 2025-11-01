package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.ALLERGIES_ROUTE;

import com.sysinfo.dpi.patient.dto.AllergyDto;
import com.sysinfo.dpi.patient.services.AllergyService;
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
 * @since 18.04.22
 */

@RestController
@RequestMapping(ALLERGIES_ROUTE)
@RequiredArgsConstructor
@Api("Allergies")
public class AllergyController {

  private final AllergyService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody AllergyDto allergy
  ) {
    return ResponseEntity.ok(service.save(allergy));
  }

  @GetMapping("/patient/{patientId}")
  public ResponseEntity<List<AllergyDto>> findAllByPatient(
      @PathVariable("patientId") Integer patientId
  ) {
    return ResponseEntity.ok(service.findAllByPatient(patientId));
  }

  @GetMapping("/{allergyId}")
  public ResponseEntity<AllergyDto> findById(
      @PathVariable("allergyId") Integer allergyId
  ) {
    return ResponseEntity.ok(service.findById(allergyId));
  }

  @DeleteMapping("/{allergyId}")
  public ResponseEntity<String> delete(
      @PathVariable("allergyId") Integer allergyId
  ) {
    service.delete(allergyId);
    return ResponseEntity.ok("Allergy Deleted");
  }
}
