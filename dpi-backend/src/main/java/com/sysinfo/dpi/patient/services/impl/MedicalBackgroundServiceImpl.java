package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.patient.dto.MedicalBackgroundDto;
import com.sysinfo.dpi.patient.repositories.MedicalBackgroundRepository;
import com.sysinfo.dpi.patient.services.MedicalBackgroundService;
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
 * @since 18.04.22
 */

@Service
@RequiredArgsConstructor
@Slf4j
public class MedicalBackgroundServiceImpl implements MedicalBackgroundService {

  private final MedicalBackgroundRepository repository;
  private final ClassValidator<MedicalBackgroundDto> validator;

  @Override
  public Integer save(MedicalBackgroundDto dto) {
    validator.validate(dto);
    return repository.save(MedicalBackgroundDto.toEntity(dto)).getId();
  }

  @Override
  public MedicalBackgroundDto findById(Integer id) {
    return repository.findById(id)
        .map(MedicalBackgroundDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No medical background was found with the provided id %s", id)));
  }

  @Override
  public List<MedicalBackgroundDto> findAll() {
    return repository.findAll()
        .stream()
        .map(MedicalBackgroundDto::fromEntity)
        .sorted(Comparator.comparing(MedicalBackgroundDto::getDate).reversed())
        .collect(Collectors.toList());
  }

  @Override
  public List<MedicalBackgroundDto> findAllByPatientId(Integer id) {
    return repository.findAllByPatientId(id)
        .stream()
        .map(MedicalBackgroundDto::fromEntity)
        .sorted(Comparator.comparing(MedicalBackgroundDto::getDate).reversed())
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer id) {
    repository.deleteById(id);
  }
}
