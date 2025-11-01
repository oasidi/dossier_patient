package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.Sexe;
import java.time.LocalDate;
import lombok.Data;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */

@Data
public class PatientSearchCriteria {

  private String nationalId;

  private String firstName;

  private String middleName;

  private String lastname;

  private String phoneNumber;

  private LocalDate birthdate;

  private String email;

  private Sexe sexe;

}
