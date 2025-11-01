package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.MEDICAL_BACKGROUND_TYPES_ROUTE;

import com.sysinfo.dpi.patient.dto.MedicalBackgroundTypeDto;
import com.sysinfo.dpi.patient.services.MedicalBackgroundTypeService;
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
@RequestMapping(MEDICAL_BACKGROUND_TYPES_ROUTE)
@RequiredArgsConstructor
@Api("Medical background types")
public class MedicalBackgroundTypeController {

  private final MedicalBackgroundTypeService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody MedicalBackgroundTypeDto backgroundType
  ) {
    return ResponseEntity.ok(service.save(backgroundType));
  }

  @GetMapping("/{medicalBackgroundTypeId}")
  public ResponseEntity<MedicalBackgroundTypeDto> findById(
      @PathVariable("medicalBackgroundTypeId") Integer medicalBackgroundTypeId
  ) {
    return ResponseEntity.ok(service.findById(medicalBackgroundTypeId));
  }

  @GetMapping("/")
  public ResponseEntity<List<MedicalBackgroundTypeDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @DeleteMapping("/{medicalBackgroundTypeId}")
  public ResponseEntity<String> delete(
      @PathVariable("medicalBackgroundTypeId") Integer medicalBackgroundTypeId
  ) {
    service.delete(medicalBackgroundTypeId);
    return ResponseEntity.ok("Allergy type was successfully removed");
  }

}
