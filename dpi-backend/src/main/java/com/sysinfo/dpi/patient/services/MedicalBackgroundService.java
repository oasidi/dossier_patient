package com.sysinfo.dpi.patient.services;

import com.sysinfo.dpi.common.services.AbstractService;
import com.sysinfo.dpi.patient.dto.MedicalBackgroundDto;
import java.util.List;

/**
 * @author Ali Bouali
 * @since 18.04.22
 */
public interface MedicalBackgroundService extends AbstractService<MedicalBackgroundDto> {

  List<MedicalBackgroundDto> findAllByPatientId(Integer id);

}
