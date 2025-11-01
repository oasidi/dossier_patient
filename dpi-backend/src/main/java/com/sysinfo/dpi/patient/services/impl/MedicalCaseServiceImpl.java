package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.patient.dto.MedicalCaseDto;
import com.sysinfo.dpi.patient.repositories.MedicalCaseRepository;
import com.sysinfo.dpi.patient.services.MedicalCaseService;
import com.sysinfo.dpi.common.validators.ClassValidator;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * @author Ali Bouali
 * @since 20.04.22
 */

@Service
@RequiredArgsConstructor
@Slf4j
public class MedicalCaseServiceImpl implements MedicalCaseService {

  private final MedicalCaseRepository repository;
  private final ClassValidator<MedicalCaseDto> validator;

  @Override
  public Integer save(MedicalCaseDto dto) {
    validator.validate(dto);
    return repository.save(MedicalCaseDto.toEntity(dto)).getId();
  }

  @Override
  public MedicalCaseDto findById(Integer id) {
    return repository.findById(id)
        .map(MedicalCaseDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No medical case was found with the provided id %s", id)));
  }

  @Override
  public List<MedicalCaseDto> findAll() {
    // do not implement --> not needed
    return null;
  }

  @Override
  public void delete(Integer id) {
    repository.deleteById(id);
  }

  @Override
  public List<MedicalCaseDto> findAllByPatient(Integer patientId) {
    return repository.findAllByPatientId(patientId)
        .stream()
        .map(MedicalCaseDto::fromEntity)
        .sorted(Comparator.comparing(MedicalCaseDto::getDate).reversed())
        .collect(Collectors.toList());
  }
}
