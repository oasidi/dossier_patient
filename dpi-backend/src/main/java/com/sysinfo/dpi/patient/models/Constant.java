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

/**
 * @author Ali Bouali
 * @since  17.04.22
 */

@SuperBuilder
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Constant extends AbstractEntity {

  @ManyToOne
  @JoinColumn(name = "constantTypeId")
  private ConstantType constantType;

  private double value;

  @ManyToOne
  @JoinColumn(name = "patientId")
  private Patient patient;

}
