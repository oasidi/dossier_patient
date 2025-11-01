package com.sysinfo.dpi.patient.models;

import com.sysinfo.dpi.appointment.models.Appointment;
import com.sysinfo.dpi.common.models.AbstractEntity;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@Entity
public class Patient extends AbstractEntity {

  @Column(unique = true)
  // NNI -> Numero ID National
  private String nationalId;

  private String firstname;

  // prenom du pere
  private String middleName;

  private String lastname;

  private LocalDate birthdate;

  private String birthPlace;

  @Enumerated(EnumType.STRING)
  private Sexe sexe;

  private String phoneNumber;

  @Column(unique = true)
  private String email;

  @Enumerated(EnumType.STRING)
  private MaritalStatus maritalStatus;

  private String bloodGroup;

  private String rhesus;

  private LocalDate dateOfDeath;

  @OneToOne(mappedBy = "patient")
  private Address address;

  @OneToOne(mappedBy = "patient")
  private ContactPerson contactPerson;

  @OneToMany(mappedBy = "patient")
  private List<Constant> constants;

  @OneToMany(mappedBy = "patient")
  private List<MedicalBackground> medicalBackgrounds;

  @OneToMany(mappedBy = "patient")
  private List<Preference> preferences;

  @OneToMany(mappedBy = "patient")
  private List<Allergy> allergies;

  @OneToMany(mappedBy = "patient")
  private List<MedicalCase> medicalCases;

  @OneToMany(mappedBy = "patient")
  private List<Document> documents;

  @OneToMany(mappedBy = "patient")
  private List<Appointment> appointments;

}
