package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.patient.dto.MedicalCaseTypeDto;
import com.sysinfo.dpi.patient.repositories.MedicalCaseTypeRepository;
import com.sysinfo.dpi.patient.services.MedicalCaseTypeService;
import com.sysinfo.dpi.common.validators.ClassValidator;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Ali Bouali
 * @since 01.05.22
 */

@Service
@RequiredArgsConstructor
public class MedicalCaseTypeServiceImpl implements MedicalCaseTypeService {

  private final MedicalCaseTypeRepository repository;
  private final ClassValidator<MedicalCaseTypeDto> validator;

  @Override
  public Integer save(MedicalCaseTypeDto dto) {
    validator.validate(dto);
    return repository.save(MedicalCaseTypeDto.toEntity(dto)).getId();
  }

  @Override
  public MedicalCaseTypeDto findById(Integer id) {
    return repository.findById(id)
        .map(MedicalCaseTypeDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No medical case type was found with the provided id %s", id)));
  }

  @Override
  public List<MedicalCaseTypeDto> findAll() {
    return repository.findAll()
        .stream()
        .map(MedicalCaseTypeDto::fromEntity)
        .sorted(Comparator.comparing(MedicalCaseTypeDto::getDate).reversed())
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer id) {
    repository.deleteById(id);
  }
}
