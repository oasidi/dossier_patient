package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.ContactPerson;
import com.sysinfo.dpi.patient.models.Patient;
import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Ali Bouali
 * @since 30.04.22
 */

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactPersonDto {

  private Integer id;

  private String firstname;

  private String lastname;

  private String phoneNumber;

  private Instant date;

  private Integer patientId;

  public static ContactPersonDto fromEntity(ContactPerson person) {
    return ContactPersonDto.builder()
        .id(person.getId())
        .firstname(person.getFirstName())
        .lastname(person.getLastName())
        .phoneNumber(person.getPhoneNumber())
        .date(person.getCreationDate())
        .patientId(person.getPatient().getId())
        .build();
  }

  public static ContactPerson toEntity(ContactPersonDto person) {
    return ContactPerson.builder()
        .id(person.getId())
        .firstName(person.getFirstname())
        .lastName(person.getLastname())
        .phoneNumber(person.getPhoneNumber())
        .patient(
            Patient.builder()
                .id(person.patientId)
                .build()
        )
        .build();
  }

}
