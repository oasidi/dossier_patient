package com.sysinfo.dpi.appointment.models;

import com.sysinfo.dpi.common.models.AbstractEntity;
import com.sysinfo.dpi.consultation.models.Consultation;
import com.sysinfo.dpi.patient.models.MedicalCase;
import com.sysinfo.dpi.patient.models.Patient;
import java.time.LocalTime;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 * @author Houssem BOUALI
 * @since 11/05/2022
 **/
@SuperBuilder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Appointment extends AbstractEntity {

  // todo replace with personnel ID
  private Integer personnelId;

  @OneToOne
  @JoinColumn(name = "consultationId", referencedColumnName = "id")
  private Consultation consultation;

  private LocalTime startTime;

  private LocalTime endTime;

  @ManyToOne
  @JoinColumn(name = "patientId")
  private Patient patient;

  @ManyToOne
  @JoinColumn(name = "medicalCaseId")
  private MedicalCase medicalCase;

  @ManyToOne
  @JoinColumn(name = "bookingId")
  private Booking booking;


}
