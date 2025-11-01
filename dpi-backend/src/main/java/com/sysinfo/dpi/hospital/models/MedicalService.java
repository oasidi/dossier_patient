package com.sysinfo.dpi.hospital.models;

import com.sysinfo.dpi.appointment.models.Booking;
import com.sysinfo.dpi.common.models.AbstractEntity;
import com.sysinfo.dpi.consultation.models.AnalysisRequest;
import com.sysinfo.dpi.consultation.models.RadiologyRequest;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
@Entity
public class MedicalService extends AbstractEntity {

  @Column(unique = true)
  private String code;

  private String name;

  private String description;

  private String director;

  private String logo;

  private boolean billable;

  @Embedded
  private GeoLocation location;

  private String phoneNumber;

  private boolean canHospitalize;

  private boolean active;

  @ManyToOne
  @JoinColumn(name = "hospitalId")
  private Hospital hospital;

  @OneToMany(mappedBy = "service")
  private List<Booking> bookings;

  @OneToMany(mappedBy = "service")
  private List<RadiologyRequest> radiologyRequests;

  @OneToMany(mappedBy = "analysis")
  private List<AnalysisRequest> analysisRequests;
}
