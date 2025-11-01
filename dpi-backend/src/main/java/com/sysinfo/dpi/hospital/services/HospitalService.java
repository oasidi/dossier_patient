package com.sysinfo.dpi.hospital.services;

import com.sysinfo.dpi.common.services.AbstractService;
import com.sysinfo.dpi.hospital.dto.HospitalDto;

/**
 * @author Ali Bouali
 * @since 13.05.22
 */
public interface HospitalService extends AbstractService<HospitalDto> {

  HospitalDto getHospitalInformation();

}
