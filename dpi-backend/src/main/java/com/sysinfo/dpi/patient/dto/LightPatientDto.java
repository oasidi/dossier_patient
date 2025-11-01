package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.MaritalStatus;
import com.sysinfo.dpi.patient.models.Patient;
import com.sysinfo.dpi.patient.models.Sexe;
import java.time.Instant;
import java.time.LocalDate;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.PastOrPresent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */

@SuperBuilder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LightPatientDto {

  private Integer id;

  @NotNull
  @NotEmpty
  private String nationalId;

  @NotNull
  @NotEmpty
  private String firstName;

  // prenom du pere
  private String middleName;

  @NotNull
  @NotEmpty
  private String lastname;

  @NotNull
  @Past
  private LocalDate birthdate;

  private String birthPlace;

  private Sexe sexe;

  @NotNull
  @NotEmpty
  private String phoneNumber;

  @Email
  private String email;

  private MaritalStatus maritalStatus;

  private String bloodGroup;

  private String rhesus;

  @PastOrPresent
  private LocalDate dateOfDeath;

  private Instant date;

  public static LightPatientDto fromEntity(Patient patient) {

    return LightPatientDto.builder()
        .id(patient.getId())
        .nationalId(patient.getNationalId())
        .firstName(patient.getFirstname())
        .middleName(patient.getMiddleName())
        .lastname(patient.getLastname())
        .birthdate(patient.getBirthdate())
        .birthPlace(patient.getBirthPlace())
        .sexe(patient.getSexe())
        .phoneNumber(patient.getPhoneNumber())
        .email(patient.getEmail())
        .maritalStatus(patient.getMaritalStatus())
        .bloodGroup(patient.getBloodGroup())
        .rhesus(patient.getRhesus())
        .dateOfDeath(patient.getDateOfDeath())
        .date(patient.getCreationDate())
        .build();
  }

  public static Patient toEntity(LightPatientDto dto) {

    return Patient.builder()
        .id(dto.getId())
        .nationalId(dto.getNationalId())
        .firstname(dto.getFirstName())
        .middleName(dto.getMiddleName())
        .lastname(dto.getLastname())
        .birthdate(dto.getBirthdate())
        .birthPlace(dto.getBirthPlace())
        .sexe(dto.getSexe())
        .phoneNumber(dto.getPhoneNumber())
        .email(dto.getEmail())
        .maritalStatus(dto.getMaritalStatus())
        .bloodGroup(dto.getBloodGroup())
        .rhesus(dto.getRhesus())
        .dateOfDeath(dto.getDateOfDeath())
        .build();
  }
}
