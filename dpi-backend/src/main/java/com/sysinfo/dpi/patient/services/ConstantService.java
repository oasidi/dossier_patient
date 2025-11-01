package com.sysinfo.dpi.patient.services;

import com.sysinfo.dpi.common.services.AbstractService;
import com.sysinfo.dpi.patient.dto.ConstantDto;
import java.util.List;

/**
 * @author Ali Bouali
 * @since 18.04.22
 */
public interface ConstantService extends AbstractService<ConstantDto> {

  List<ConstantDto> findAllByPatient(Integer patientId);
}
