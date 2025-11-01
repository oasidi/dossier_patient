package com.sysinfo.dpi.appointment.dto;

import com.sysinfo.dpi.appointment.models.Appointment;
import com.sysinfo.dpi.appointment.utils.Constants;
import com.sysinfo.dpi.common.exceptions.MappingException;
import com.sysinfo.dpi.patient.models.MedicalCase;
import com.sysinfo.dpi.patient.models.Patient;
import java.time.LocalTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Houssem BOUALI
 * @since 11/05/2022
 **/
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDto {

  private Integer id;
  private Integer personnelId;
  private Integer patientId;
  private Integer consultationId;
  private Integer medicalCaseId;
  private Integer bookingId;
  private LocalTime startTime;
  private LocalTime endTime;

  public static Appointment toEntity(AppointmentDto dto) {
    if (dto == null) {
      throw new MappingException(Constants.MAP_TO_ENTITY, Constants.NULL_MAPPING);
    }
    return Appointment.builder()
        .personnelId(dto.getPersonnelId())
        .patient(
            Patient.builder()
                .id(dto.getPatientId())
                .build()
        )
        .medicalCase(
            MedicalCase.builder()
                .id(dto.getMedicalCaseId())
                .build()
        )
        // .consultationId(dto.getConsultationId())
        .startTime(dto.getStartTime())
        .endTime(dto.getEndTime())
        .build();
  }

  public static AppointmentDto fromEntity(Appointment entity) {
    if (entity == null) {
      throw new MappingException(Constants.MAP_TO_DTO, Constants.NULL_MAPPING);
    }
    return AppointmentDto.builder()
        .id(entity.getId())
        .personnelId(entity.getPersonnelId())
        .patientId(entity.getPatient().getId())
        .medicalCaseId(entity.getMedicalCase().getId())
        // .consultationId(entity.getConsultationId())
        .build();
  }
}
