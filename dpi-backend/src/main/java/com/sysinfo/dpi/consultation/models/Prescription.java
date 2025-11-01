package com.sysinfo.dpi.consultation.models;

import com.sysinfo.dpi.common.models.AbstractEntity;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "consultationType", discriminatorType = DiscriminatorType.INTEGER)
public class Prescription extends AbstractEntity {

  @ManyToOne
  @JoinColumn(name = "consultationId")
  private Consultation consultation;
}
