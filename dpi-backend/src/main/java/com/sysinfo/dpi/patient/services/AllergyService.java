package com.sysinfo.dpi.patient.services;

import com.sysinfo.dpi.common.services.AbstractService;
import com.sysinfo.dpi.patient.dto.AllergyDto;
import java.util.List;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */
public interface AllergyService extends AbstractService<AllergyDto> {

  List<AllergyDto> findAllByPatient(Integer patientId);

}
