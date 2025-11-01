package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.ALLERGY_TYPES_ROUTE;

import com.sysinfo.dpi.patient.dto.AllergyTypeDto;
import com.sysinfo.dpi.patient.services.AllergyTypeService;
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
@RequestMapping(ALLERGY_TYPES_ROUTE)
@RequiredArgsConstructor
@Api("Allergy types")
public class AllergyTypeController {

  private final AllergyTypeService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody AllergyTypeDto allergyType
  ) {
    return ResponseEntity.ok(service.save(allergyType));
  }

  @GetMapping("/{allergyTypeId}")
  public ResponseEntity<AllergyTypeDto> findById(
      @PathVariable("allergyTypeId") Integer allergyTypeId
  ) {
    return ResponseEntity.ok(service.findById(allergyTypeId));
  }

  @GetMapping("/")
  public ResponseEntity<List<AllergyTypeDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @DeleteMapping("/{allergyTypeId}")
  public ResponseEntity<String> delete(
      @PathVariable("allergyTypeId") Integer allergyTypeId
  ) {
    service.delete(allergyTypeId);
    return ResponseEntity.ok("Allergy type was successfully removed");
  }

}
