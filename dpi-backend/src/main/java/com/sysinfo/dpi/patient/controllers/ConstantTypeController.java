package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.CONSTANT_TYPES_ROUTE;

import com.sysinfo.dpi.patient.dto.ConstantTypeDto;
import com.sysinfo.dpi.patient.services.ConstantTypeService;
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
@RequestMapping(CONSTANT_TYPES_ROUTE)
@RequiredArgsConstructor
@Api("Constants types")
public class ConstantTypeController {

  private final ConstantTypeService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody ConstantTypeDto constantType
  ) {
    return ResponseEntity.ok(service.save(constantType));
  }

  @GetMapping("/{constantTypeId}")
  public ResponseEntity<ConstantTypeDto> findById(
      @PathVariable("constantTypeId") Integer constantTypeId
  ) {
    return ResponseEntity.ok(service.findById(constantTypeId));
  }

  @GetMapping("/")
  public ResponseEntity<List<ConstantTypeDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @DeleteMapping("/{constantTypeId}")
  public ResponseEntity<String> delete(
      @PathVariable("constantTypeId") Integer constantTypeId
  ) {
    service.delete(constantTypeId);
    return ResponseEntity.ok("Allergy type was successfully removed");
  }

}
