package com.sysinfo.dpi.appointment.dto;

import com.sysinfo.dpi.patient.models.Sexe;
import java.time.LocalDate;
import java.time.LocalTime;
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
public class DetailedPatientAppointment {

  private Integer appointmentId;

  private String medicalCaseTitle;

  private Integer patientId;

  private String patientFirstname;

  private String patientLastname;

  private Sexe sexe;

  private String medicalServiceName;

  private LocalTime startTime;

  private LocalTime endTime;

}
