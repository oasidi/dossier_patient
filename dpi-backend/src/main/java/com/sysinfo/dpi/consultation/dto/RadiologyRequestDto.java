package com.sysinfo.dpi.consultation.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Ali Bouali
 * @since 09.06.22
 */
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RadiologyRequestDto {

  private Integer id;

  private Integer radiologyId;

  private Integer serviceId;

}
