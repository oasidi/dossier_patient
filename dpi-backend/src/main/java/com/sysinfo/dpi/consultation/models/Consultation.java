package com.sysinfo.dpi.consultation.models;

import com.sysinfo.dpi.appointment.models.Appointment;
import com.sysinfo.dpi.common.models.AbstractEntity;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.Type;

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
public class Consultation extends AbstractEntity {

  @Type(type = "text")
  private String anamnesis;

  @Type(type = "text")
  private String physicalExamination;

  @Type(type = "text")
  private String complementaryExamination;

  @Type(type = "text")
  private String differentialDiagnosis;

  @Type(type = "text")
  private String proposition;

  @Type(type = "text")
  private String furtherConsultation;

  @Enumerated(EnumType.ORDINAL)
  private ConsultationStatus status;

  @OneToOne(mappedBy = "consultation")
  private Appointment appointment;

  @OneToMany(mappedBy = "consultation")
  private List<Prescription> prescriptions;

}
