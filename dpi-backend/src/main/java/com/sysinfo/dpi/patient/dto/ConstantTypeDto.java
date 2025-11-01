package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.ConstantType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Ali Bouali
 * @since 18.04.22
 */

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConstantTypeDto {

  private Integer id;

  private String constantName;

  private String constantUnit;

  public static ConstantTypeDto fromEntity(ConstantType constantType) {
    return ConstantTypeDto.builder()
        .id(constantType.getId())
        .constantName(constantType.getConstantName())
        .constantUnit(constantType.getConstantUnit())
        .build();
  }

  public static ConstantType toEntity(ConstantTypeDto constantType) {
    return ConstantType.builder()
        .id(constantType.getId())
        .constantName(constantType.getConstantName())
        .constantUnit(constantType.getConstantUnit())
        .build();
  }
}
