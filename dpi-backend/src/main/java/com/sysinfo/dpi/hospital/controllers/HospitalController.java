package com.sysinfo.dpi.hospital.controllers;

import static com.sysinfo.dpi.hospital.utils.Routes.HOSPITAL_ROUTE;

import com.sysinfo.dpi.hospital.dto.HospitalDto;
import com.sysinfo.dpi.hospital.services.HospitalService;
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
@RequestMapping(HOSPITAL_ROUTE)
@RequiredArgsConstructor
@Api("hospital")
public class HospitalController {

  private final HospitalService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody HospitalDto hospital
  ) {
    return ResponseEntity.ok(service.save(hospital));
  }

  @GetMapping("/{hospitalId}")
  public ResponseEntity<HospitalDto> findById(
      @PathVariable("hospitalId") Integer hospitalId
  ) {
    return ResponseEntity.ok(service.findById(hospitalId));
  }

  @GetMapping("/information")
  public ResponseEntity<HospitalDto> getHospitalInformation() {
    return ResponseEntity.ok(service.getHospitalInformation());
  }

  @GetMapping("/")
  public ResponseEntity<List<HospitalDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @DeleteMapping("/{hospitalId}")
  public ResponseEntity<String> delete(
      @PathVariable("hospitalId") Integer hospitalId
  ) {
    service.delete(hospitalId);
    return ResponseEntity.ok("Hospital was successfully removed");
  }
}
