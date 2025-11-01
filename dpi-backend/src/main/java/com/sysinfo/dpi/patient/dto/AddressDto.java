package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.Address;
import com.sysinfo.dpi.patient.models.Patient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {

  private Integer id;

  // le seul a afficher
  @NotNull
  @NotEmpty
  private String street;

  private String houseNumber;

  private String country;

  private String postalCode;

  private Integer patientId;

  public static AddressDto fromEntity(Address address) {
    return AddressDto.builder()
        .id(address.getId())
        .street(address.getStreet())
        .houseNumber(address.getHouseNumber())
        .country(address.getCountry())
        .postalCode(address.getPostalCode())
        .patientId(address.getPatient().getId())
        .build();
  }

  public static Address toEntity(AddressDto dto) {
    return Address.builder()
        .id(dto.getId())
        .street(dto.getStreet())
        .houseNumber(dto.getHouseNumber())
        .country(dto.getCountry())
        .postalCode(dto.getPostalCode())
        .patient(
            Patient.builder()
                .id(dto.getPatientId())
                .build()
        )
        .build();
  }

}
