package com.sysinfo.dpi.pharmacy.dto;

import com.sysinfo.dpi.pharmacy.models.Medication;
import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Ali Bouali
 * @since 15.08.22
 */
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicationDto {

  private Integer id;

  private String code;

  private String name;

  private String description;

  private String type;

  private BigDecimal price;

  public static MedicationDto fromEntity(Medication medication) {
    return MedicationDto.builder()
        .id(medication.getId())
        .code(medication.getCode())
        .name(medication.getName())
        .description(medication.getDescription())
        .type(medication.getType())
        .price(medication.getPrice())
        .build();
  }

  public static Medication toEntity(MedicationDto medication) {
    return Medication.builder()
        .id(medication.getId())
        .code(medication.getCode())
        .name(medication.getName())
        .description(medication.getDescription())
        .type(medication.getType())
        .price(medication.getPrice())
        .build();
  }

}
