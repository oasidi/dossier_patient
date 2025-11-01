package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.MEDICAL_BACKGROUNDS_ROUTE;

import com.sysinfo.dpi.patient.dto.MedicalBackgroundDto;
import com.sysinfo.dpi.patient.services.MedicalBackgroundService;
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
@RequestMapping(MEDICAL_BACKGROUNDS_ROUTE)
@RequiredArgsConstructor
@Api("Medical backgrounds")
public class MedicalBackgroundController {

  private final MedicalBackgroundService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody MedicalBackgroundDto medicalBackground
  ) {
    return ResponseEntity.ok(service.save(medicalBackground));
  }

  @GetMapping("/{medicalBackgroundId}")
  public ResponseEntity<MedicalBackgroundDto> findById(
      @PathVariable("medicalBackgroundId") Integer medicalBackgroundId
  ) {
    return  ResponseEntity.ok(service.findById(medicalBackgroundId));
  }

  @GetMapping("/patient/{patientId}")
  public ResponseEntity<List<MedicalBackgroundDto>> findAllByPatientId(
      @PathVariable("patientId") Integer patientId
  ) {
    return ResponseEntity.ok(service.findAllByPatientId(patientId));
  }

  @DeleteMapping("/{medicalBackgroundId}")
  public ResponseEntity<String> delete(
      @PathVariable("medicalBackgroundId") Integer medicalBackgroundId
  ) {
    service.delete(medicalBackgroundId);
    return ResponseEntity.ok("Deleted");
  }
}
