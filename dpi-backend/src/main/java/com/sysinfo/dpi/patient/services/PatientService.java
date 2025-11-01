package com.sysinfo.dpi.patient.services;

import com.sysinfo.dpi.common.services.AbstractService;
import com.sysinfo.dpi.patient.dto.LightPatientDto;
import com.sysinfo.dpi.patient.dto.PatientSearchCriteria;
import java.util.List;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */
public interface PatientService extends AbstractService<LightPatientDto> {

  List<LightPatientDto> searchPatient(PatientSearchCriteria criteria);


}
