package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.MedicalBackgroundType;
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
@AllArgsConstructor
@NoArgsConstructor
public class MedicalBackgroundTypeDto {

  private Integer id;

  private String backgroundName;

  public static MedicalBackgroundTypeDto fromEntity(MedicalBackgroundType backgroundType) {
    return MedicalBackgroundTypeDto.builder()
        .id(backgroundType.getId())
        .backgroundName(backgroundType.getBackgroundName())
        .build();
  }

  public static MedicalBackgroundType toEntity(MedicalBackgroundTypeDto dto) {
    return MedicalBackgroundType.builder()
        .id(dto.getId())
        .backgroundName(dto.backgroundName)
        .build();
  }

}
