package com.sysinfo.dpi.patient.models;

import com.sysinfo.dpi.common.models.AbstractEntity;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.Type;

/**
 * @author Ali Bouali
 *
 */

@SuperBuilder
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class MedicalBackground extends AbstractEntity {

  @Type(type = "text")
  private String background;

  private boolean confidential;

  private int period;

  @Type(type = "text")
  private String treatment;

  @Type(type = "text")
  private String remarks;

  @ManyToOne
  @JoinColumn(name = "medicalBackgroundTypeId")
  private MedicalBackgroundType medicalBackgroundType;

  @ManyToOne
  @JoinColumn(name = "patientId")
  private Patient patient;
}
