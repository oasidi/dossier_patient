package com.sysinfo.dpi.appointment.service;

import com.sysinfo.dpi.appointment.dto.AppointmentDto;
import com.sysinfo.dpi.appointment.dto.AppointmentRepresentation;
import com.sysinfo.dpi.appointment.dto.DetailedPatientAppointment;
import com.sysinfo.dpi.common.services.AbstractService;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

/**
 * @author Houssem BOUALI
 * @since 11/05/2022
 **/
public interface AppointmentService extends AbstractService<AppointmentDto> {

  List<AppointmentRepresentation> findAllByPatientId(Integer patientId);
}
