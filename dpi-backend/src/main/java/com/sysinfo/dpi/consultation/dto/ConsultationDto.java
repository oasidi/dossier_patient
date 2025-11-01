package com.sysinfo.dpi.consultation.dto;

import com.sysinfo.dpi.appointment.models.Appointment;
import com.sysinfo.dpi.consultation.models.Consultation;
import com.sysinfo.dpi.consultation.models.ConsultationStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Ali Bouali
 * @since 08.06.22
 */
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ConsultationDto {

  private Integer id;

  private String anamnesis;

  private String physicalExamination;

  private String complementaryExamination;

  private String differentialDiagnosis;

  private String proposition;

  private String furtherConsultation;

  private Integer appointmentId;

  private ConsultationStatus status;

  public static ConsultationDto fromEntity(Consultation consultation) {
    return ConsultationDto.builder()
        .id(consultation.getId())
        .anamnesis(consultation.getAnamnesis())
        .physicalExamination(consultation.getPhysicalExamination())
        .complementaryExamination(consultation.getComplementaryExamination())
        .differentialDiagnosis(consultation.getDifferentialDiagnosis())
        .proposition(consultation.getProposition())
        .furtherConsultation(consultation.getFurtherConsultation())
        .appointmentId(consultation.getId())
        .status(consultation.getStatus())
        .build();
  }

  public static Consultation toEntity(ConsultationDto dto) {
    return Consultation.builder()
        .id(dto.getId())
        .anamnesis(dto.getAnamnesis())
        .physicalExamination(dto.getPhysicalExamination())
        .complementaryExamination(dto.getComplementaryExamination())
        .differentialDiagnosis(dto.getDifferentialDiagnosis())
        .proposition(dto.getProposition())
        .furtherConsultation(dto.getFurtherConsultation())
        .appointment(
            Appointment.builder()
                .id(dto.getAppointmentId())
                .build()
        )
        .build();
  }
}
