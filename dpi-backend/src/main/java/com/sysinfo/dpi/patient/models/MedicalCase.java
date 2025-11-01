package com.sysinfo.dpi.patient.models;

import com.sysinfo.dpi.appointment.models.Appointment;
import com.sysinfo.dpi.common.models.AbstractEntity;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
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
@AllArgsConstructor
@Entity
public class MedicalCase extends AbstractEntity {

  @Type(type = "text")
  private String description;

  @Type(type = "text")
  private String title;

  @Type(type = "text")
  private String comment;

  @Enumerated(EnumType.STRING)
  private MedicalCaseStatus status;


  @ManyToOne
  @JoinColumn(name = "medicalCaseTypeId")
  private MedicalCaseType medicalCaseType;

  @ManyToOne
  @JoinColumn(name = "patientId")
  private Patient patient;

  @OneToMany(mappedBy = "medicalCase")
  private List<Appointment> appointments;

}
