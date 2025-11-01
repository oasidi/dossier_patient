package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.patient.dto.AllergyDto;
import com.sysinfo.dpi.patient.repositories.AllergyRepository;
import com.sysinfo.dpi.patient.services.AllergyService;
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
public class AllergyServiceImpl implements AllergyService {

  private final AllergyRepository repository;
  private final ClassValidator<AllergyDto> validator;

  @Override
  public Integer save(AllergyDto dto) {
    validator.validate(dto);
    return repository.save(AllergyDto.toEntity(dto)).getId();
  }

  @Override
  public List<AllergyDto> findAllByPatient(Integer patientId) {
    return repository.findAllByPatientId(patientId)
        .stream()
        .map(AllergyDto::fromEntity)
        .sorted(Comparator.comparing(AllergyDto::getDate).reversed())
        .collect(Collectors.toList());
  }

  @Override
  public AllergyDto findById(Integer id) {
    return repository.findById(id)
        .map(AllergyDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No allergy was found with the provided id %s", id)));
  }

  @Override
  public List<AllergyDto> findAll() {
    return repository.findAll()
        .stream()
        .map(AllergyDto::fromEntity)
        .sorted(Comparator.comparing(AllergyDto::getDate).reversed())
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer id) {
    repository.deleteById(id);
  }
}
