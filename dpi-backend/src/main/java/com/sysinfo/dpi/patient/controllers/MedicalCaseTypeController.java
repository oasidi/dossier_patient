package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.MEDICAL_CASE_TYPES_ROUTE;

import com.sysinfo.dpi.patient.dto.MedicalCaseTypeDto;
import com.sysinfo.dpi.patient.services.MedicalCaseTypeService;
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
@RequestMapping(MEDICAL_CASE_TYPES_ROUTE)
@RequiredArgsConstructor
@Api("medical cases types")
public class MedicalCaseTypeController {

  private final MedicalCaseTypeService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody MedicalCaseTypeDto allergyType
  ) {
    return ResponseEntity.ok(service.save(allergyType));
  }

  @GetMapping("/{medicalCaseTypeId}")
  public ResponseEntity<MedicalCaseTypeDto> findById(
      @PathVariable("medicalCaseTypeId") Integer medicalCaseTypeId
  ) {
    return ResponseEntity.ok(service.findById(medicalCaseTypeId));
  }

  @GetMapping("/")
  public ResponseEntity<List<MedicalCaseTypeDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @DeleteMapping("/{medicalCaseTypeId}")
  public ResponseEntity<String> delete(
      @PathVariable("medicalCaseTypeId") Integer medicalCaseTypeId
  ) {
    service.delete(medicalCaseTypeId);
    return ResponseEntity.ok("Allergy type was successfully removed");
  }

}
