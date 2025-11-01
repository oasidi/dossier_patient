package com.sysinfo.dpi.consultation.models;

import lombok.Getter;

/**
 * @author Ali Bouali
 * @since 20.07.22
 */
public enum ConsultationStatus {

  STAND_BY(0),
  OPEN(1),
  IN_PROGRESS(2),
  CLOSED(3);

  @Getter
  private final int status;

  ConsultationStatus(int status) {
    this.status = status;
  }
}
