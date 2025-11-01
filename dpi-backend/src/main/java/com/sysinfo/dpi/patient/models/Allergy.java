package com.sysinfo.dpi.patient.models;

import com.sysinfo.dpi.common.models.AbstractEntity;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.Type;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */

@SuperBuilder
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@Entity
public class Allergy extends AbstractEntity {

  @Type(type = "text")
  private String allergy;

  @Type(type = "text")
  private String remarks;

  private boolean confidential;

  @ManyToOne
  @JoinColumn(name = "allergyTypeId")
  private AllergyType allergyType;


  @ManyToOne
  @JoinColumn(name = "patientId")
  private Patient patient;
}
