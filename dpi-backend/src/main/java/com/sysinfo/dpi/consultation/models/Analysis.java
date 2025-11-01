package com.sysinfo.dpi.consultation.models;

import java.util.List;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
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
@Entity
@DiscriminatorValue("3")
public class Analysis extends Prescription {

  @OneToMany(mappedBy = "analysis")
  private List<AnalysisRequest> analysisRequests;
}
