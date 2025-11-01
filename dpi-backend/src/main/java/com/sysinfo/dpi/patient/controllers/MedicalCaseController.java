package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.MEDICAL_CASES_ROUTE;

import com.sysinfo.dpi.patient.dto.MedicalCaseDto;
import com.sysinfo.dpi.patient.services.MedicalCaseService;
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
@RequestMapping(MEDICAL_CASES_ROUTE)
@RequiredArgsConstructor
@Api("Medical cases")
public class MedicalCaseController {

  private final MedicalCaseService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody MedicalCaseDto medicalCase
  ) {
    return ResponseEntity.ok(service.save(medicalCase));
  }

  @GetMapping("/{caseId}")
  public ResponseEntity<MedicalCaseDto> findById(
      @PathVariable("caseId") Integer caseId
  ) {
    return ResponseEntity.ok(service.findById(caseId));
  }

  @GetMapping("/patient/{patientId}")
  public ResponseEntity<List<MedicalCaseDto>> findAllByPatient(
      @PathVariable("patientId") Integer patientId
  ) {
    return ResponseEntity.ok(service.findAllByPatient(patientId));
  }

  @DeleteMapping("/{caseId}")
  public ResponseEntity<String> delete(
      @PathVariable("caseId") Integer caseId
  ) {
    service.delete(caseId);
    return ResponseEntity.ok("deleted");
  }
}
