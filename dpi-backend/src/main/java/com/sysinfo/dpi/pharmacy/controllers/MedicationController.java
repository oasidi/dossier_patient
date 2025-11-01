package com.sysinfo.dpi.pharmacy.controllers;

import static com.sysinfo.dpi.pharmacy.utils.Routes.MEDICATION_ROUTE;

import com.sysinfo.dpi.pharmacy.dto.MedicationDto;
import com.sysinfo.dpi.pharmacy.services.MedicationService;
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
 * @since 15.08.22
 */

@RestController
@RequestMapping(MEDICATION_ROUTE)
@RequiredArgsConstructor
@Api("Medication")
public class MedicationController {

  private final MedicationService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody MedicationDto medicationDto
  ) {
    return ResponseEntity.ok(service.save(medicationDto));
  }

  @GetMapping("/{medicationId}")
  public ResponseEntity<MedicationDto> findById(
      @PathVariable("medicationId") Integer medicationId
  ) {
    return ResponseEntity.ok(service.findById(medicationId));
  }

  @GetMapping("/")
  public ResponseEntity<List<MedicationDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @DeleteMapping("/{medicationId}")
  public ResponseEntity<String> delete(
      @PathVariable("medicationId") Integer medicationId
  ) {
    service.delete(medicationId);
    return ResponseEntity.ok("Medication was successfully removed");
  }
}
