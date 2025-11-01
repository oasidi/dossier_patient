package com.sysinfo.dpi.appointment.service.impl;

import com.sysinfo.dpi.appointment.dto.AppointmentDto;
import com.sysinfo.dpi.appointment.dto.AppointmentRepresentation;
import com.sysinfo.dpi.appointment.dto.DetailedPatientAppointment;
import com.sysinfo.dpi.appointment.models.Appointment;
import com.sysinfo.dpi.appointment.models.Booking;
import com.sysinfo.dpi.appointment.repositories.AppointmentRepository;
import com.sysinfo.dpi.appointment.repositories.BookingRepository;
import com.sysinfo.dpi.appointment.service.AppointmentService;
import com.sysinfo.dpi.appointment.utils.Constants;
import com.sysinfo.dpi.common.exceptions.DataNotFoundException;
import com.sysinfo.dpi.common.exceptions.IllegalArgsException;
import com.sysinfo.dpi.common.exceptions.OperationNotPermittedException;
import com.sysinfo.dpi.common.validators.ClassValidator;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

/**
 * @author Houssem BOUALI
 * @since 11/05/2022
 **/

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {

  private final AppointmentRepository repository;
  private final BookingRepository bookingRepository;
  private final ClassValidator<AppointmentDto> validator;

  @Override
  public Integer save(AppointmentDto object) {
    validator.validate(object);
    Booking booking = bookingRepository.findById(object.getBookingId())
        .orElseThrow(
            () -> new OperationNotPermittedException("Cannot create",
                "save",
                "Save appointment",
                "Booking Not Found")
        );
    Appointment appointment = AppointmentDto.toEntity(object);
    appointment.setBooking(booking);
    return repository.save(appointment).getId();
  }

  @Override
  public AppointmentDto findById(Integer id) {
    if (id == null) {
      throw new IllegalArgsException("[AppointmentService::FindById]", Constants.PARAMETER_NOT_NULL);
    }
    Appointment appointment = repository.findById(id).orElseThrow(
        () -> new DataNotFoundException("[AppointmentService::FindById]", Constants.DATA_NOT_FOUND)
    );
    return AppointmentDto.fromEntity(appointment);
  }

  @Override
  public List<AppointmentDto> findAll() {
    return repository.findAll().stream()
        .map(AppointmentDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer id) {
    if (id == null) {
      throw new IllegalArgsException("[AppointmentService::FindById]", Constants.PARAMETER_NOT_NULL);
    }
    repository.deleteById(id);
  }

  @Override
  @Transactional
  public List<AppointmentRepresentation> findAllByPatientId(Integer patientId) {
    final Map<LocalDate, List<DetailedPatientAppointment>> appointmentsMap = new HashMap<>();
    final List<AppointmentRepresentation> patientAppointments = new ArrayList<>();

    repository.findAllByPatientId(patientId).forEach(appointment -> {
      var bookings = appointmentsMap.get(appointment.getBooking().getBookingDate());
      if (CollectionUtils.isEmpty(bookings)) {
        appointmentsMap.put(appointment.getBooking().getBookingDate(), List.of(toPatientAppointment(appointment)));
      } else {
        var appendedBooking = new ArrayList<>(bookings);
        appendedBooking.add(toPatientAppointment(appointment));
        appointmentsMap.put(appointment.getBooking().getBookingDate(), appendedBooking);
      }
    });
    appointmentsMap.keySet().forEach(key -> patientAppointments.add(
        AppointmentRepresentation
            .builder()
            .bookingDate(key)
            .appointmentDetails(appointmentsMap.get(key))
            .build()
    ));
    return patientAppointments
        .stream()
        .sorted(Comparator.comparing(AppointmentRepresentation::getBookingDate).reversed())
        .collect(Collectors.toList());
  }

  private DetailedPatientAppointment toPatientAppointment(Appointment appointment) {
    return DetailedPatientAppointment.builder()
        .appointmentId(appointment.getId())
        .startTime(appointment.getStartTime())
        .endTime(appointment.getEndTime())
        .medicalServiceName(appointment.getBooking().getService().getName())
        .medicalCaseTitle(appointment.getMedicalCase().getTitle())
        .build();
  }
}
