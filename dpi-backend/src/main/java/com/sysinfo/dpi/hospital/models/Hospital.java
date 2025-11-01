package com.sysinfo.dpi.hospital.models;

import com.sysinfo.dpi.common.models.AbstractEntity;
import java.util.List;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
public class Hospital extends AbstractEntity {

  private String name;

  @Enumerated(EnumType.STRING)
  private Status status;

  private String logo;

  private String dashboardPhoto;

  private String directorName;

  private String locality;

  private String phoneNumber;

  private String webSiteUrl;

  private String email;

  @Embedded
  private GeoLocation location;

  @OneToMany(mappedBy = "hospital")
  private List<MedicalService> services;

}
