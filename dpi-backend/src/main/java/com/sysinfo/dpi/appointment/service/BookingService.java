package com.sysinfo.dpi.appointment.service;

import com.sysinfo.dpi.appointment.dto.BookingDto;
import com.sysinfo.dpi.appointment.dto.DetailedPatientAppointment;
import com.sysinfo.dpi.appointment.dto.TimeSlotDto;
import com.sysinfo.dpi.common.services.AbstractService;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

/**
 * @author Houssem BOUALI
 * @since 12/05/2022
 **/
public interface BookingService extends AbstractService<BookingDto> {

  BookingDto findByDate(LocalDate date);

  List<TimeSlotDto> getAvailableSlots(LocalDateTime date);

  List<TimeSlotDto> getFullDaySlots();

  List<TimeSlotDto> checkAppointment(Integer serviceId, Integer patientId, LocalDate date);

  List<DetailedPatientAppointment> getTodayServiceBooking(String serviceId);
}
