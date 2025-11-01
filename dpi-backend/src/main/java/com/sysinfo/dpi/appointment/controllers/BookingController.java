package com.sysinfo.dpi.appointment.controllers;

import static com.sysinfo.dpi.appointment.utils.Routes.BOOKING_ROUTE;
import static com.sysinfo.dpi.config.GlobalConstants.SERVICE_ID;

import com.sysinfo.dpi.appointment.dto.BookingDto;
import com.sysinfo.dpi.appointment.dto.CheckBookingPostDto;
import com.sysinfo.dpi.appointment.dto.DetailedPatientAppointment;
import com.sysinfo.dpi.appointment.dto.TimeSlotDto;
import com.sysinfo.dpi.appointment.service.BookingService;
import com.sysinfo.dpi.appointment.utils.Constants;
import io.swagger.annotations.Api;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.keycloak.adapters.springsecurity.account.SimpleKeycloakAccount;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.representations.AccessToken;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Houssem BOUALI
 * @since 12/05/2022
 **/
@RestController
@RequestMapping(BOOKING_ROUTE)
@RequiredArgsConstructor
@Api("Booking")
public class BookingController {

  private final BookingService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(@RequestBody @Valid BookingDto bookingDto) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.save(bookingDto));
  }

  @GetMapping("/{id}")
  public ResponseEntity<BookingDto> findById(@PathVariable("id") Integer id) {
    return ResponseEntity.ok(service.findById(id));
  }

  @GetMapping("/{date}")
  public ResponseEntity<BookingDto> findByDate(@PathVariable("date") @DateTimeFormat(pattern = Constants.DATE_FORMAT) LocalDate date) {
    return ResponseEntity.ok(service.findByDate(date));
  }

  @GetMapping("/{date}/slots")
  public ResponseEntity<Collection<TimeSlotDto>> availableSlots(
      @PathVariable("date") @DateTimeFormat(pattern = Constants.DATE_HOUR_FORMAT) LocalDateTime date) {
    return ResponseEntity.ok(service.getAvailableSlots(date));
  }

  @GetMapping("/")
  public ResponseEntity<Collection<BookingDto>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable("id") Integer id) {
    service.delete(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @PostMapping("/check")
  public ResponseEntity<List<TimeSlotDto>> checkAppointment(@RequestBody @Valid CheckBookingPostDto post) {
    return ResponseEntity.ok(service.checkAppointment(post.getServiceId(), post.getPatientId(), post.getDate()));
  }

  @GetMapping("/appointments")
  public ResponseEntity<List<DetailedPatientAppointment>> getTodayServiceAppointments(
      HttpServletRequest request
  ) {
    var serviceId = getServiceId(request);
    return ResponseEntity.ok(service.getTodayServiceBooking(serviceId));
  }

  private String getServiceId(HttpServletRequest request) {
    KeycloakAuthenticationToken userPrincipal = (KeycloakAuthenticationToken) request.getUserPrincipal();
    SimpleKeycloakAccount simpleKeyCloakAccount = (SimpleKeycloakAccount) userPrincipal.getDetails();
    AccessToken token = simpleKeyCloakAccount.getKeycloakSecurityContext().getToken();
    var otherClaims = token.getOtherClaims();
    if (otherClaims.get(SERVICE_ID) == null) {
      throw new IllegalStateException("SERVICE_ID not available");
    }
    return (String) otherClaims.get(SERVICE_ID);
  }

}
