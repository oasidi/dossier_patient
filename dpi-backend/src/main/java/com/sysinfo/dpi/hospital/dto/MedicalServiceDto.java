package com.sysinfo.dpi.hospital.dto;

import com.sysinfo.dpi.hospital.models.GeoLocation;
import com.sysinfo.dpi.hospital.models.Hospital;
import com.sysinfo.dpi.hospital.models.MedicalService;
import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Ali Bouali
 * @since 13.05.22
 */
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MedicalServiceDto {

  private Integer id;

  private String name;

  private String code;

  private String description;

  private String director;

  private String logo;

  private boolean billable;

  private GeoLocation location;

  private String phoneNumber;

  private boolean canHospitalize;

  private boolean active;

  private Integer hospitalId;

  private Instant date;

  public static MedicalServiceDto fromEntity(MedicalService service) {
    return MedicalServiceDto.builder()
        .id(service.getId())
        .name(service.getName())
        .code(service.getCode())
        .description(service.getDescription())
        .director(service.getDirector())
        .logo(service.getLogo())
        .billable(service.isBillable())
        .location(service.getLocation())
        .phoneNumber(service.getPhoneNumber())
        .canHospitalize(service.isCanHospitalize())
        .active(service.isActive())
        .hospitalId(service.getHospital().getId())
        .date(service.getCreationDate())
        .build();
  }

  public static MedicalService toEntity(MedicalServiceDto service) {
    return MedicalService.builder()
        .id(service.getId())
        .name(service.getName())
        .code(service.getCode())
        .description(service.getDescription())
        .director(service.getDirector())
        .logo(service.getLogo())
        .billable(service.isBillable())
        .location(service.getLocation())
        .phoneNumber(service.getPhoneNumber())
        .canHospitalize(service.isCanHospitalize())
        .active(service.isActive())
        .hospital(
            Hospital.builder()
                .id(service.getHospitalId())
                .build()
        )
        .build();
  }

}
