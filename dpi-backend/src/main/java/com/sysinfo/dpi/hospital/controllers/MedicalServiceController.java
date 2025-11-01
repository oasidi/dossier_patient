package com.sysinfo.dpi.hospital.controllers;

import static com.sysinfo.dpi.hospital.utils.Routes.MEDICAL_SERVICE_ROUTE;

import com.sysinfo.dpi.hospital.dto.MedicalServiceDto;
import com.sysinfo.dpi.hospital.services.MedicalServiceService;
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
 * @since 13.05.22
 */

@RestController
@RequestMapping(MEDICAL_SERVICE_ROUTE)
@RequiredArgsConstructor
@Api("medical service")
public class MedicalServiceController {

  private final MedicalServiceService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody MedicalServiceDto hospital
  ) {
    return ResponseEntity.ok(service.save(hospital));
  }

  @GetMapping("/{medicalServiceId}")
  public ResponseEntity<MedicalServiceDto> findById(
      @PathVariable("medicalServiceId") Integer medicalServiceId
  ) {
    return ResponseEntity.ok(service.findById(medicalServiceId));
  }

  @GetMapping("/")
  public ResponseEntity<List<MedicalServiceDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @DeleteMapping("/{medicalServiceId}")
  public ResponseEntity<String> delete(
      @PathVariable("medicalServiceId") Integer medicalServiceId
  ) {
    service.delete(medicalServiceId);
    return ResponseEntity.ok("Hospital was successfully removed");
  }
}
