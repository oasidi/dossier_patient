package com.sysinfo.dpi.consultation.models;

import com.sysinfo.dpi.common.models.AbstractEntity;
import com.sysinfo.dpi.hospital.models.MedicalService;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 * @author Ali Bouali
 * @since 09.06.22
 */
@SuperBuilder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class AnalysisRequest extends AbstractEntity {

  @ManyToOne
  @JoinColumn(name = "analysisId")
  private Analysis analysis;

  @ManyToOne
  @JoinColumn(name = "serviceId")
  private MedicalService service;

}
