package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.Preference;
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
public class PreferenceDto {

  private Integer id;

  private String description;

  private Integer patientId;

  private Instant date;

  public static PreferenceDto fromEntity(Preference preference) {
    return PreferenceDto.builder()
        .id(preference.getId())
        .description(preference.getDescription())
        .date(preference.getCreationDate())
        .build();
  }

  public static Preference toEntity(PreferenceDto dto) {
    return Preference.builder()
        .id(dto.getId())
        .description(dto.getDescription())
        .build();
  }

}
