package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.ADDRESS_ROUTE;

import com.sysinfo.dpi.patient.dto.AddressDto;
import com.sysinfo.dpi.patient.services.AddressService;
import io.swagger.annotations.Api;
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
@RequestMapping(ADDRESS_ROUTE)
@RequiredArgsConstructor
@Api("Address")
public class AddressController {

  private final AddressService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody AddressDto address
  ) {
    return ResponseEntity.ok(service.save(address));
  }

  @GetMapping("/{addressId}")
  public ResponseEntity<AddressDto> findById(
      @PathVariable("addressId") Integer addressId
  ) {
    return ResponseEntity.ok(service.findById(addressId));
  }

  @GetMapping("/patient/{patientId}")
  public ResponseEntity<AddressDto> findByPatientId(
      @PathVariable("patientId") Integer patientId
  ) {
    return ResponseEntity.ok(service.findById(patientId));
  }

  @DeleteMapping("/{patientId}")
  public ResponseEntity<String> delete(
      @PathVariable("patientId") Integer patientId
  ) {
    service.delete(patientId);
    return ResponseEntity.ok("deleted");
  }

}
