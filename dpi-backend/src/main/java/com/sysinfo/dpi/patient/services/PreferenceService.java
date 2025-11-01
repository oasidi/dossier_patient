package com.sysinfo.dpi.patient.services;

import com.sysinfo.dpi.common.services.AbstractService;
import com.sysinfo.dpi.patient.dto.PreferenceDto;
import java.util.List;

/**
 * @author Ali Bouali
 * @since 20.04.22
 */
public interface PreferenceService extends AbstractService<PreferenceDto> {

  List<PreferenceDto> findAllByPatient(Integer patientId);

}
