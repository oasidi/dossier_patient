package com.sysinfo.dpi.consultation.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 * @author Ali Bouali
 * @since 08.06.22
 */
@SuperBuilder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PrescriptionDto {

  private Integer id;

  private Integer consultationId;
}
