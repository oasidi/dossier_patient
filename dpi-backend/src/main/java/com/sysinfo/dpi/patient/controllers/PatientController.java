package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.PATIENTS_ROUTE;

import com.sysinfo.dpi.patient.dto.LightPatientDto;
import com.sysinfo.dpi.patient.dto.PatientSearchCriteria;
import com.sysinfo.dpi.patient.services.PatientService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
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
 * @since 17.04.22
 */

@RestController
@RequestMapping(PATIENTS_ROUTE)
@RequiredArgsConstructor
@Api("Patient")
public class PatientController {

  private final PatientService service;

  @PostMapping("/")
  @ApiOperation("Create / update a new patient")
  public ResponseEntity<Integer> save(
      @RequestBody LightPatientDto patient
  ) {
    return ResponseEntity.ok(service.save(patient));
  }

  @GetMapping("/")
  @ApiOperation("Get the list of all the patients")
  public ResponseEntity<List<LightPatientDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @GetMapping("/light/{patientId}")
  @ApiOperation("Find light patient representation by ID")
  public ResponseEntity<LightPatientDto> findLightPatientById(
      @PathVariable("patientId") Integer patientId
  ) {
    return ResponseEntity.ok(service.findById(patientId));
  }

  @PostMapping("/search")
  @ApiOperation("Search light patients representation by search criteria")
  public ResponseEntity<List<LightPatientDto>> searchPatients(
      @RequestBody PatientSearchCriteria searchCriteria
  ) {
    return ResponseEntity.ok(service.searchPatient(searchCriteria));
  }

  @DeleteMapping("/{patientId}")
  public ResponseEntity<String> delete(
      @PathVariable("patientId") Integer patientId
  ) {
    service.delete(patientId);
    return ResponseEntity.ok("deleted");
  }

}
