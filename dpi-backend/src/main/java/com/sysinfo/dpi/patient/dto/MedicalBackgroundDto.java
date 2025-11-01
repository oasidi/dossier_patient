package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.MedicalBackground;
import com.sysinfo.dpi.patient.models.MedicalBackgroundType;
import com.sysinfo.dpi.patient.models.Patient;
import java.time.Instant;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Ali Bouali
 */

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedicalBackgroundDto {

  private Integer id;

  private String background;

  private boolean confidential;

  private int period;

  private String treatment;

  private String remarks;

  @NotNull
  private Integer patientId;

  @NotNull
  private Integer medicalBackgroundTypeId;

  private String medicalBackgroundTypeLabel;

  private Instant date;

  public static MedicalBackgroundDto fromEntity(MedicalBackground medicalBackground) {
    return MedicalBackgroundDto.builder()
        .id(medicalBackground.getId())
        .background(medicalBackground.getBackground())
        .confidential(medicalBackground.isConfidential())
        .period(medicalBackground.getPeriod())
        .treatment(medicalBackground.getTreatment())
        .remarks(medicalBackground.getRemarks())
        .patientId(medicalBackground.getPatient().getId())
        .medicalBackgroundTypeId(medicalBackground.getMedicalBackgroundType().getId())
        .medicalBackgroundTypeLabel(medicalBackground.getMedicalBackgroundType().getBackgroundName())
        .date(medicalBackground.getCreationDate())
        .build();
  }

  public static MedicalBackground toEntity(MedicalBackgroundDto dto) {
    return MedicalBackground.builder()
        .id(dto.getId())
        .background(dto.getBackground())
        .confidential(dto.isConfidential())
        .period(dto.getPeriod())
        .treatment(dto.getTreatment())
        .remarks(dto.getRemarks())
        .patient(
            Patient.builder()
                .id(dto.getPatientId())
                .build()
        )
        .medicalBackgroundType(
            MedicalBackgroundType.builder()
                .id(dto.getMedicalBackgroundTypeId())
                .build()
        )
        .build();
  }
}
