package com.sysinfo.dpi.appointment.controllers;

import static com.sysinfo.dpi.appointment.utils.Routes.APPOINTMENTS_ROUTE;

import com.sysinfo.dpi.appointment.dto.AppointmentDto;
import com.sysinfo.dpi.appointment.dto.AppointmentRepresentation;
import com.sysinfo.dpi.appointment.dto.DetailedPatientAppointment;
import com.sysinfo.dpi.appointment.service.AppointmentService;
import io.swagger.annotations.Api;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Houssem BOUALI
 * @since 11/05/2022
 **/
@RestController
@RequestMapping(APPOINTMENTS_ROUTE)
@RequiredArgsConstructor
@Api("Appointment")
public class AppointmentController {

  private final AppointmentService service;

  @PostMapping("/")
  public ResponseEntity<Integer> create(@RequestBody AppointmentDto appointmentDto) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.save(appointmentDto));
  }

  @PutMapping("/")
  public ResponseEntity<Integer> update(@RequestBody AppointmentDto appointmentDto) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.save(appointmentDto));
  }

  @GetMapping("/{id}")
  public ResponseEntity<AppointmentDto> findById(@PathVariable("id") Integer id) {
    return ResponseEntity.ok(service.findById(id));
  }

  @GetMapping("/")
  public ResponseEntity<Collection<AppointmentDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @GetMapping("/patient/{patientId}")
  public ResponseEntity<List<AppointmentRepresentation>> findAllPatientAppointments(
      @PathVariable Integer patientId
  ) {
    return ResponseEntity.ok(service.findAllByPatientId(patientId));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
    service.delete(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

}
