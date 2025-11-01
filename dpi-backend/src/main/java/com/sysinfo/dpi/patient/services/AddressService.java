package com.sysinfo.dpi.patient.services;

import com.sysinfo.dpi.common.services.AbstractService;
import com.sysinfo.dpi.patient.dto.AddressDto;

/**
 * @author Ali Bouali
 * @since 20.04.22
 */
public interface AddressService extends AbstractService<AddressDto> {

  AddressDto findByPatientId(Integer patientId);

}
