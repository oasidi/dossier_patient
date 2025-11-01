package com.sysinfo.dpi.appointment.dto;

import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Ali Bouali
 * @since 28.05.22
 */

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentRepresentation {

  private LocalDate bookingDate;

  private List<DetailedPatientAppointment> appointmentDetails;
}
