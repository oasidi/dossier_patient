package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.AllergyType;
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
public class AllergyTypeDto {

  private Integer id;

  private String allergyName;

  public static AllergyTypeDto fromEntity(AllergyType allergyType) {
    return AllergyTypeDto.builder()
        .id(allergyType.getId())
        .allergyName(allergyType.getAllergyName())
        .build();
  }

  public static AllergyType toEntity(AllergyTypeDto dto) {
    return AllergyType.builder()
        .id(dto.getId())
        .allergyName(dto.getAllergyName())
        .build();
  }

}
