package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.Constant;
import com.sysinfo.dpi.patient.models.ConstantType;
import com.sysinfo.dpi.patient.models.Patient;
import java.time.Instant;
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
public class ConstantDto {

  private Integer id;

  private double value;

  private Integer patientId;

  @Positive
  private Integer constantTypeId;

  private String constantTypeLabel;

  private String constantTypeUnit;

  private Instant date;

  public static ConstantDto fromEntity(Constant constant) {
    return ConstantDto.builder()
        .id(constant.getId())
        .value(constant.getValue())
        .constantTypeId(constant.getConstantType().getId())
        .constantTypeLabel(constant.getConstantType().getConstantName())
        .constantTypeUnit(constant.getConstantType().getConstantUnit())
        .patientId(constant.getPatient().getId())
        .date(constant.getCreationDate())
        .build();
  }

  public static Constant toEntity(ConstantDto dto) {
    return Constant.builder()
        .id(dto.getId())
        .value(dto.getValue())
        .constantType(
            ConstantType.builder()
                .id(dto.constantTypeId)
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
