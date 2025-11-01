package com.sysinfo.dpi.appointment.service.impl;

import com.sysinfo.dpi.appointment.dto.BookingDto;
import com.sysinfo.dpi.appointment.dto.DetailedPatientAppointment;
import com.sysinfo.dpi.appointment.dto.TimeSlotDto;
import com.sysinfo.dpi.appointment.models.Appointment;
import com.sysinfo.dpi.appointment.models.Booking;
import com.sysinfo.dpi.appointment.repositories.BookingRepository;
import com.sysinfo.dpi.appointment.service.BookingService;
import com.sysinfo.dpi.appointment.utils.Constants;
import com.sysinfo.dpi.common.exceptions.DataNotFoundException;
import com.sysinfo.dpi.common.exceptions.IllegalArgsException;
import com.sysinfo.dpi.common.validators.ClassValidator;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Houssem BOUALI
 * @since 12/05/2022
 **/
@Service
@RequiredArgsConstructor
@Transactional
public class BookingServiceImpl implements BookingService {

  private final BookingRepository repository;
  private final ClassValidator<BookingDto> validator;

  @Override
  public Integer save(BookingDto object) {
    validator.validate(object);
    Booking booking = repository.findByServiceIdAndBookingDate(object.getServiceId(), object.getBookingDate()).orElse(null);
    if (booking == null) {
      return repository.save(BookingDto.toEntity(object)).getId();
    }
    return booking.getId();
  }

  @Override
  public BookingDto findById(Integer id) {
    if (id == null) {
      throw new IllegalArgsException("[BookingService::FindById]", Constants.PARAMETER_NOT_NULL);
    }
    Booking booking = repository.findById(id).orElseThrow(
        () -> new DataNotFoundException("[BookingService::FindById]", Constants.DATA_NOT_FOUND)
    );
    return BookingDto.fromEntity(booking);
  }

  @Override
  public List<BookingDto> findAll() {
    return repository.findAll().stream()
        .map(BookingDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer id) {
    if (id == null) {
      throw new IllegalArgsException("[BookingService::FindById]", Constants.PARAMETER_NOT_NULL);
    }
    repository.deleteById(id);
  }

  @Override
  public BookingDto findByDate(LocalDate date) {
    if (date == null) {
      throw new IllegalArgsException("[BookingService::FindById]", Constants.PARAMETER_NOT_NULL);
    }
    Booking booking = repository.findByBookingDate(date).orElseThrow(
        () -> new DataNotFoundException("[BookingService::FindById]", Constants.DATA_NOT_FOUND)
    );
    return BookingDto.fromEntity(booking);
  }

  @Override
  public List<TimeSlotDto> getAvailableSlots(LocalDateTime date) {
    if (date == null) {
      throw new IllegalArgsException("[BookingService::FindById]", Constants.PARAMETER_NOT_NULL);
    }
    return repository.findByBookingDate(date.toLocalDate())
        .map(value -> calculateAvailableSlots(value, date))
        .orElse(getFullDaySlots());
  }

  @Override
  public List<TimeSlotDto> checkAppointment(Integer serviceId, Integer patientId, LocalDate date) {
    Booking booking = repository.findByServiceIdAndBookingDate(serviceId, date).orElse(null);
    List<Appointment> appointments;
    List<TimeSlotDto> serviceAppointments = Collections.emptyList();
    List<TimeSlotDto> fullDayAppointments;
    if (booking != null && !(appointments = booking.getAppointments()).isEmpty()) {
      serviceAppointments = appointments.stream()
          .map(appointment -> TimeSlotDto.builder()
              .appointmentId(appointment.getId())
              .patientId(appointment.getPatient().getId())
              .start(appointment.getStartTime())
              .end(appointment.getEndTime())
              .available(false)
              .build()
          ).collect(Collectors.toList());
    }
    fullDayAppointments = getFullDaySlots();
    if (serviceAppointments.isEmpty()) {
      return fullDayAppointments;
    }
    serviceAppointments.forEach(slot -> markSlotAsUnavailable(fullDayAppointments, slot));
    return fullDayAppointments;
  }

  @Override
  @Transactional
  public List<DetailedPatientAppointment> getTodayServiceBooking(String serviceCode) {
    final LocalDate today = LocalDate.now();
    List<Appointment> appointments;
    Booking booking = repository.findByServiceCodeAndBookingDate(serviceCode, today).orElse(null);
    if (booking != null && !(appointments = booking.getAppointments()).isEmpty()) {
      return appointments.stream()
          .filter(a -> a.getConsultation() == null)
          .map(appointment -> DetailedPatientAppointment.builder()
              .appointmentId(appointment.getId())
              .medicalCaseTitle(appointment.getMedicalCase().getTitle())
              .patientId(appointment.getPatient().getId())
              .patientFirstname(appointment.getPatient().getFirstname())
              .patientLastname(appointment.getPatient().getLastname())
              .sexe(appointment.getPatient().getSexe())
              .medicalServiceName(booking.getService().getName())
              .startTime(appointment.getStartTime())
              .endTime(appointment.getEndTime())
              .build()
          ).sorted(Comparator.comparing(DetailedPatientAppointment::getStartTime))
          .collect(Collectors.toList());
    }
    return Collections.emptyList();
  }

  private void markSlotAsUnavailable(List<TimeSlotDto> fullDayAppointments, TimeSlotDto slot) {
    for (TimeSlotDto daySlot : fullDayAppointments) {
      if (daySlot.getStart().equals(slot.getStart()) && daySlot.getEnd().equals(slot.getEnd())) {
        daySlot.setAppointmentId(slot.getAppointmentId());
        daySlot.setAvailable(false);
        daySlot.setPatientId(slot.getPatientId());
        break;
      }
    }
  }

  private List<TimeSlotDto> calculateAvailableSlots(Booking booking, LocalDateTime date) {
    List<TimeSlotDto> slots = processCalc(date, booking.getEndHour());
    return filterSlots(booking.getAppointments(), slots);
  }

  private TimeSlotDto buildTimeSlot(int auxHour, int auxMin) {
    return TimeSlotDto.builder()
        .start(LocalTime.of(auxHour, auxMin))
        .end(LocalTime.of(auxHour, auxMin + Constants.APPOINTMENT_DURATION - 1))
        .available(true)
        .build();
  }

  private LocalTime adjustStartTime(LocalDateTime date) {
    LocalTime startTime = date.toLocalTime();
    if (startTime.getMinute() % Constants.APPOINTMENT_DURATION != 0) {
      startTime = startTime.plusMinutes(Constants.APPOINTMENT_DURATION - (date.getMinute() % Constants.APPOINTMENT_DURATION));
    }
    return startTime;
  }

  private LocalTime adjustEndTime(LocalTime endHour) {
    LocalTime endTime = LocalTime.from(endHour);
    if (endHour.getMinute() % Constants.APPOINTMENT_DURATION != 0) {
      endTime = endHour.minusMinutes(endHour.getMinute() % Constants.APPOINTMENT_DURATION);
    }
    return endTime;
  }

  private List<TimeSlotDto> filterSlots(List<Appointment> appointments, List<TimeSlotDto> slots) {
    appointments.stream()
        .map(appointment -> TimeSlotDto.builder()
            .start(appointment.getStartTime())
            .end(appointment.getEndTime())
            .build()
        ).filter(slots::contains).forEach(slot -> {
          slot.setAvailable(false);
          slots.set(slots.indexOf(slot), slot);
        });
    return slots;
  }

  @Override
  public List<TimeSlotDto> getFullDaySlots() {
    LocalDateTime start = LocalDateTime.of(LocalDate.now(), LocalTime.of(7, 0));
    LocalTime end = LocalTime.of(21, 0);
    return processCalc(start, end);
  }

  private List<TimeSlotDto> processCalc(LocalDateTime start, LocalTime end) {
    List<TimeSlotDto> slots = new ArrayList<>();
    // Adjust start time
    LocalTime startTime = adjustStartTime(start);
    // Adjust end time
    LocalTime endTime = adjustEndTime(end);
    int auxHour = startTime.getHour();
    int auxMin = startTime.getMinute();
    int count = 1;

    while (LocalTime.of(auxHour, auxMin).isBefore(endTime)) {
      slots.add(buildTimeSlot(auxHour, auxMin));
      count++;
      auxMin += Constants.APPOINTMENT_DURATION;
      if (count == 4) {
        auxMin = 0;
        auxHour++;
        count = 0;
      }
    }
    return slots;
  }
}
