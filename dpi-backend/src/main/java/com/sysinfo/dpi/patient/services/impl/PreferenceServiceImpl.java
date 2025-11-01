package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.patient.dto.PreferenceDto;
import com.sysinfo.dpi.patient.repositories.PreferenceRepository;
import com.sysinfo.dpi.patient.services.PreferenceService;
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
public class PreferenceServiceImpl implements PreferenceService {

  private final PreferenceRepository repository;
  private final ClassValidator<PreferenceDto> validator;

  @Override
  public Integer save(PreferenceDto dto) {
    validator.validate(dto);
    return repository.save(PreferenceDto.toEntity(dto)).getId();
  }

  @Override
  public PreferenceDto findById(Integer id) {
    return repository.findById(id)
        .map(PreferenceDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No allergy was found with the provided id %s", id)));
  }

  @Override
  public List<PreferenceDto> findAll() {
    // Not needed
    return null;
  }

  @Override
  public void delete(Integer id) {

  }

  @Override
  public List<PreferenceDto> findAllByPatient(Integer patientId) {
    return repository.findAllByPatientId(patientId)
        .stream()
        .map(PreferenceDto::fromEntity)
        .sorted(Comparator.comparing(PreferenceDto::getDate).reversed())
        .collect(Collectors.toList());
  }
}
