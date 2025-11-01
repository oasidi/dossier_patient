package com.sysinfo.dpi.patient.services;

import com.sysinfo.dpi.common.services.AbstractService;
import com.sysinfo.dpi.patient.dto.MedicalCaseDto;
import java.util.List;

/**
 * @author Ali Bouali
 * @since 20.04.22
 */
public interface MedicalCaseService extends AbstractService<MedicalCaseDto> {

  List<MedicalCaseDto> findAllByPatient(Integer patientId);

}
