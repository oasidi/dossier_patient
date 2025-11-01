package com.sysinfo.dpi.hospital.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 * @author Ali Bouali
 * @since 13.05.22
 */

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@Embeddable
public class GeoLocation {

  @Column
  private long latitude;

  @Column
  private long longitude;
}
