package com.sysinfo.dpi.consultation.controllers;

import static com.sysinfo.dpi.consultation.utils.Routes.CONSULTATIONS_ROUTE;

import com.sysinfo.dpi.consultation.dto.ConsultationDto;
import com.sysinfo.dpi.consultation.models.ConsultationStatus;
import com.sysinfo.dpi.consultation.services.ConsultationService;
import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Ali Bouali
 * @since 22.07.22
 */
@RestController
@RequestMapping(CONSULTATIONS_ROUTE)
@RequiredArgsConstructor
@Api("Consultation")
public class ConsultationController {

  private final ConsultationService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(@RequestBody ConsultationDto dto) {
    return ResponseEntity.ok(service.save(dto));
  }

  @GetMapping("/{consultationId}")
  public ResponseEntity<ConsultationDto> findById(@PathVariable("consultationId") Integer consultationId) {
    return ResponseEntity.ok(service.findById(consultationId));
  }

  @GetMapping("/")
  public ResponseEntity<List<ConsultationDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @DeleteMapping("/{consultationId}")
  public ResponseEntity<Void> delete(@PathVariable("consultationId") Integer consultationId) {
    service.delete(consultationId);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @GetMapping("/by/patient/{patientId}")
  public ResponseEntity<List<ConsultationDto>> findAllByPatientId(@PathVariable("patientId") Integer patientId) {
    return ResponseEntity.ok(service.findAllByPatientId(patientId));
  }

  @GetMapping("/by/service/{serviceId}")
  public ResponseEntity<List<ConsultationDto>> findAllByService(@PathVariable("serviceId") Integer serviceId) {
    return ResponseEntity.ok(service.findAllByService(serviceId));
  }

  @GetMapping("/by/doctor/{doctorId}")
  public ResponseEntity<List<ConsultationDto>> findAllByDoctorId(@PathVariable("doctorId") String doctorId) {
    return ResponseEntity.ok(service.findAllByDoctorId(doctorId));
  }

  @PatchMapping("/update/status")
  public ResponseEntity<Integer> changeConsultationStatus(
      @RequestParam("status") ConsultationStatus status,
      @RequestParam(value = "appointmentId", required = false) Integer appointmentId,
      @RequestParam(value = "consultationId", required = false) Integer consultationId
  ) {
    return ResponseEntity.ok(service.changeConsultationStatus(consultationId, appointmentId, status));
  }
}
