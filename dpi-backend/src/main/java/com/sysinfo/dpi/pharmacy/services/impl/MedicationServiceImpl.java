package com.sysinfo.dpi.pharmacy.services.impl;

import com.sysinfo.dpi.common.exceptions.DataNotFoundException;
import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.pharmacy.dto.MedicationDto;
import com.sysinfo.dpi.pharmacy.repositories.MedicationRepository;
import com.sysinfo.dpi.pharmacy.services.MedicationService;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Ali Bouali
 * @since 15.08.22
 */
@Service
@RequiredArgsConstructor
public class MedicationServiceImpl implements MedicationService {

  private final MedicationRepository repository;
  private final ClassValidator<MedicationDto> validator;

  @Override
  public Integer save(MedicationDto dto) {
    validator.validate(dto);
    return repository.save(MedicationDto.toEntity(dto)).getId();
  }

  @Override
  public MedicationDto findById(Integer id) {
    return repository.findById(id)
        .map(MedicationDto::fromEntity)
        .orElseThrow(() -> new DataNotFoundException("[MedicationService::FindById]", "Cannot find any corresponding data"));
  }

  @Override
  public List<MedicationDto> findAll() {
    return repository.findAll()
        .stream()
        .map(MedicationDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer id) {
    repository.deleteById(id);
  }
}
