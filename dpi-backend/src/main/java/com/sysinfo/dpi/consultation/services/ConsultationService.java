package com.sysinfo.dpi.consultation.services;

import com.sysinfo.dpi.common.services.AbstractService;
import com.sysinfo.dpi.consultation.dto.ConsultationDto;
import com.sysinfo.dpi.consultation.models.ConsultationStatus;
import java.util.List;

/**
 * @author Ali Bouali
 * @since 12.06.22
 */
public interface ConsultationService extends AbstractService<ConsultationDto> {

  List<ConsultationDto> findAllByPatientId(Integer patientId);

  List<ConsultationDto> findAllByService(Integer serviceId);

  List<ConsultationDto> findAllByDoctorId(String doctorId);

  Integer changeConsultationStatus(Integer consultationId, Integer appointmentId, ConsultationStatus status);

}
