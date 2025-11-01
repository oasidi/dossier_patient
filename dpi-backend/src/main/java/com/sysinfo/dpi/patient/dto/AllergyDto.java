package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.Allergy;
import com.sysinfo.dpi.patient.models.AllergyType;
import com.sysinfo.dpi.patient.models.Patient;
import java.time.Instant;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
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
public class AllergyDto {

  private Integer id;

  @NotNull
  @NotEmpty
  private String allergy;

  private String remarks;

  private boolean confidential;

  @NotNull
  @Positive
  private Integer allergyTypeId;

  private String allergyTypeLabel;

  private Instant date;

  private Integer patientId;

  public static AllergyDto fromEntity(Allergy allergy) {
    return AllergyDto.builder()
        .id(allergy.getId())
        .allergy(allergy.getAllergy())
        .remarks(allergy.getRemarks())
        .confidential(allergy.isConfidential())
        .allergyTypeId(allergy.getAllergyType().getId())
        .allergyTypeLabel(allergy.getAllergyType().getAllergyName())
        .date(allergy.getCreationDate())
        .build();
  }

  public static Allergy toEntity(AllergyDto dto) {
    return Allergy.builder()
        .id(dto.getId())
        .allergy(dto.getAllergy())
        .remarks(dto.getRemarks())
        .confidential(dto.isConfidential())
        .allergyType(
            AllergyType.builder()
                .id(dto.allergyTypeId)
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
