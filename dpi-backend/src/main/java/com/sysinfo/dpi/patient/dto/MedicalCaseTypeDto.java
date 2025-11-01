package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.MedicalCaseType;
import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Ali Bouali
 * @since 01.05.22
 */

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedicalCaseTypeDto {

  private Integer id;

  private String title;

  private String description;

  private Instant date;

  public static MedicalCaseType toEntity(MedicalCaseTypeDto dto) {
    return MedicalCaseType.builder()
        .id(dto.getId())
        .title(dto.getTitle())
        .description(dto.getDescription())
        .build();
  }

  public static MedicalCaseTypeDto fromEntity(MedicalCaseType medicalCase) {
    return MedicalCaseTypeDto.builder()
        .id(medicalCase.getId())
        .title(medicalCase.getTitle())
        .description(medicalCase.getDescription())
        .date(medicalCase.getCreationDate())
        .build();
  }
}
