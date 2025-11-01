package com.sysinfo.dpi.hospital.dto;

import com.sysinfo.dpi.hospital.models.GeoLocation;
import com.sysinfo.dpi.hospital.models.Hospital;
import com.sysinfo.dpi.hospital.models.Status;
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
public class HospitalDto {

  private Integer id;

  private String name;

  private Status status;

  private String logo;

  private String dashboardPhoto;

  private String directorName;

  private String locality;

  private String phoneNumber;

  private String webSiteUrl;

  private String email;

  private GeoLocation location;

  public static Hospital toEntity(HospitalDto dto) {
    return Hospital.builder()
        .id(dto.getId())
        .name(dto.getName())
        .status(dto.getStatus())
        .logo(dto.getLogo())
        .dashboardPhoto(dto.getDashboardPhoto())
        .directorName(dto.getDirectorName())
        .locality(dto.getLocality())
        .phoneNumber(dto.getPhoneNumber())
        .webSiteUrl(dto.getWebSiteUrl())
        .email(dto.getEmail())
        .location(dto.getLocation())
        .build();
  }

  public static HospitalDto fromEntity(Hospital hospital) {
    return HospitalDto.builder()
        .id(hospital.getId())
        .name(hospital.getName())
        .status(hospital.getStatus())
        .logo(hospital.getLogo())
        .dashboardPhoto(hospital.getDashboardPhoto())
        .directorName(hospital.getDirectorName())
        .locality(hospital.getLocality())
        .phoneNumber(hospital.getPhoneNumber())
        .webSiteUrl(hospital.getWebSiteUrl())
        .email(hospital.getEmail())
        .location(hospital.getLocation())
        .build();
  }
}
