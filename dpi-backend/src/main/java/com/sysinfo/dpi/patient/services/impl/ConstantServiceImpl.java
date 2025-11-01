package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.patient.dto.ConstantDto;
import com.sysinfo.dpi.patient.repositories.ConstantRepository;
import com.sysinfo.dpi.patient.services.ConstantService;
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
public class ConstantServiceImpl implements ConstantService {

  private final ConstantRepository repository;
  private final ClassValidator<ConstantDto> validator;

  @Override
  public Integer save(ConstantDto dto) {
    validator.validate(dto);
    return repository.save(ConstantDto.toEntity(dto)).getId();
  }

  @Override
  public ConstantDto findById(Integer id) {
    return repository.findById(id)
        .map(ConstantDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No constant was found with the provided id %s", id)));
  }

  @Override
  public List<ConstantDto> findAll() {
    return repository.findAll()
        .stream()
        .map(ConstantDto::fromEntity)
        .sorted(Comparator.comparing(ConstantDto::getDate).reversed())
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer id) {
    repository.deleteById(id);
  }

  @Override
  public List<ConstantDto> findAllByPatient(Integer patientId) {
    return repository.findAllByPatientId(patientId)
        .stream()
        .map(ConstantDto::fromEntity)
        .sorted(Comparator.comparing(ConstantDto::getDate).reversed())
        .collect(Collectors.toList());
  }
}
