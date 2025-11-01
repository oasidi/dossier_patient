package com.sysinfo.dpi.consultation.services.impl;

import com.sysinfo.dpi.appointment.repositories.AppointmentRepository;
import com.sysinfo.dpi.common.exceptions.DataNotFoundException;
import com.sysinfo.dpi.common.exceptions.OperationNotPermittedException;
import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.consultation.dto.ConsultationDto;
import com.sysinfo.dpi.consultation.models.Consultation;
import com.sysinfo.dpi.consultation.models.ConsultationStatus;
import com.sysinfo.dpi.consultation.repositories.ConsultationRepository;
import com.sysinfo.dpi.consultation.services.ConsultationService;
import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Ali Bouali
 * @since 12.06.22
 */
@Service
@RequiredArgsConstructor
public class ConsultationServiceImpl implements ConsultationService {

  private final ConsultationRepository repository;
  private final AppointmentRepository appointmentRepository;
  private final ClassValidator<ConsultationDto> validator;

  @Override
  @Transactional
  public Integer save(ConsultationDto dto) {
    validator.validate(dto);
    var appointment = appointmentRepository.findById(dto.getAppointmentId()).orElse(null);
    var consultation = ConsultationDto.toEntity(dto);
    consultation.setStatus(ConsultationStatus.IN_PROGRESS);
    consultation.setAppointment(appointment);
    return repository.save(consultation).getId();
  }

  @Override
  public ConsultationDto findById(Integer id) {
    return repository.findById(id)
        .map(ConsultationDto::fromEntity)
        .orElseThrow(() -> new DataNotFoundException("[ConsultationService::FindById]", "Cannot find any corresponding data"));
  }

  @Override
  public List<ConsultationDto> findAll() {
    return null;
  }

  @Override
  public void delete(Integer id) {
    // TODO check delete
    var consultation = repository.findById(id).orElse(null);
    if (consultation != null && consultation.getStatus() != ConsultationStatus.STAND_BY) {
      throw new OperationNotPermittedException(
          "Cannot delete this consultation because it is already in use",
          "delete",
          Consultation.class.getSimpleName(),
          null
      );
    }
    assert consultation != null;
    var appointment = appointmentRepository.findById(consultation.getAppointment().getId()).orElse(null);
    assert appointment != null;
    appointment.setConsultation(null);
    appointmentRepository.save(appointment);
    repository.deleteById(id);
  }

  @Override
  public List<ConsultationDto> findAllByPatientId(Integer patientId) {
    return repository.findByPatientId(patientId)
        .stream()
        .map(ConsultationDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public List<ConsultationDto> findAllByService(Integer serviceId) {
    return repository.findByServiceId(serviceId)
        .stream()
        .map(ConsultationDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public List<ConsultationDto> findAllByDoctorId(String doctorId) {
    return repository.findAllByCreatedBy(doctorId)
        .stream()
        .map(ConsultationDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public Integer changeConsultationStatus(Integer consultationId, Integer appointmentId, ConsultationStatus status) {
    Consultation consultation = Consultation.builder().build();
    if (consultationId != null) {
      consultation = repository.findById(consultationId)
          .orElse(Consultation.builder().build());
    }
    var appointment = appointmentRepository.findById(appointmentId).orElse(null);
    assert appointment != null;
    // the appointment is needed if we want to create a new consultation
    // when we click on start the consultation for the first time
    consultation.setAppointment(appointment);
    consultation.setStatus(status);
    var savedConsultation = repository.save(consultation);
    appointment.setConsultation(savedConsultation);
    appointmentRepository.save(appointment);
    return savedConsultation.getId();
  }
}
