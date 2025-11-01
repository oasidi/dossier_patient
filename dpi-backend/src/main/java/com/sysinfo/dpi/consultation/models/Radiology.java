package com.sysinfo.dpi.consultation.models;

import java.util.List;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
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
@Entity
@DiscriminatorValue("2")
public class Radiology extends Prescription {

  @OneToMany(mappedBy = "radiology")
  private List<RadiologyRequest> radiologyRequests;
}
