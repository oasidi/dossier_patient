package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.CONSTANTS_ROUTE;

import com.sysinfo.dpi.patient.dto.ConstantDto;
import com.sysinfo.dpi.patient.services.ConstantService;
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
@RequestMapping(CONSTANTS_ROUTE)
@RequiredArgsConstructor
@Api("Constants")
public class ConstantController {

  private final ConstantService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody ConstantDto constant
  ) {
    return ResponseEntity.ok(service.save(constant));
  }

  @GetMapping("/patient/{patientId}")
  public ResponseEntity<List<ConstantDto>> findAllByPatient(
      @PathVariable("patientId") Integer patientId
  ) {
    return ResponseEntity.ok(service.findAllByPatient(patientId));
  }

  @GetMapping("/{constantId}")
  public ResponseEntity<ConstantDto> findById(
      @PathVariable("constantId") Integer constantId
  ) {
    return ResponseEntity.ok(service.findById(constantId));
  }

  @DeleteMapping("/{constantId}")
  public ResponseEntity<String> delete(
      @PathVariable("constantId") Integer constantId
  ) {
    service.delete(constantId);
    return ResponseEntity.ok("Allergy Deleted");
  }

}
