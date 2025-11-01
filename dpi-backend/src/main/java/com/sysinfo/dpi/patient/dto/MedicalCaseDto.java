package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.MedicalCase;
import com.sysinfo.dpi.patient.models.MedicalCaseStatus;
import com.sysinfo.dpi.patient.models.MedicalCaseType;
import com.sysinfo.dpi.patient.models.Patient;
import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedicalCaseDto {

  private Integer id;

  private String description;

  private String title;

  private String comment;

  private MedicalCaseStatus status;

  private Integer medicalCaseTypeId;

  private String medicalCaseTypeTitle;

  private String medicalCaseTypeDescription;

  private Integer patientId;

  private Instant date;

  public static MedicalCaseDto fromEntity(MedicalCase medicalCase) {
    return MedicalCaseDto.builder()
        .id(medicalCase.getId())
        .description(medicalCase.getDescription())
        .title(medicalCase.getTitle())
        .comment(medicalCase.getComment())
        .status(medicalCase.getStatus())
        .medicalCaseTypeId(medicalCase.getMedicalCaseType().getId())
        .medicalCaseTypeTitle(medicalCase.getMedicalCaseType().getTitle())
        .medicalCaseTypeDescription(medicalCase.getMedicalCaseType().getDescription())
        .patientId(medicalCase.getPatient().getId())
        .date(medicalCase.getCreationDate())
        .build();
  }

  public static MedicalCase toEntity(MedicalCaseDto dto) {
    return MedicalCase.builder()
        .id(dto.getId())
        .description(dto.getDescription())
        .title(dto.getTitle())
        .comment(dto.getComment())
        .status(dto.getStatus())
        .medicalCaseType(
            MedicalCaseType.builder()
                .id(dto.getMedicalCaseTypeId())
                .build()
        )
        .patient(
            Patient.builder()
                .id(dto.getPatientId())
                .build()
        )
        .build();
  }

}
