package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.patient.dto.MedicalBackgroundTypeDto;
import com.sysinfo.dpi.common.exceptions.OperationNotPermittedException;
import com.sysinfo.dpi.patient.models.MedicalBackground;
import com.sysinfo.dpi.patient.models.MedicalBackgroundType;
import com.sysinfo.dpi.patient.repositories.MedicalBackgroundRepository;
import com.sysinfo.dpi.patient.repositories.MedicalBackgroundTypeRepository;
import com.sysinfo.dpi.patient.services.MedicalBackgroundTypeService;
import com.sysinfo.dpi.common.validators.ClassValidator;
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
public class MedicalBackgroundTypeServiceImpl implements MedicalBackgroundTypeService {

  private final MedicalBackgroundTypeRepository repository;
  private final MedicalBackgroundRepository medicalBackgroundRepository;
  private final ClassValidator<MedicalBackgroundTypeDto> validator;

  @Override
  public Integer save(MedicalBackgroundTypeDto dto) {
    validator.validate(dto);
    return repository.save(MedicalBackgroundTypeDto.toEntity(dto)).getId();
  }

  @Override
  public List<MedicalBackgroundTypeDto> findAll() {
    return repository.findAll()
        .stream()
        .map(MedicalBackgroundTypeDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public MedicalBackgroundTypeDto findById(Integer id) {
    return repository.findById(id)
        .map(MedicalBackgroundTypeDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No medical background type was found with the provided ID : %s", id)));
  }

  @Override
  public void delete(Integer id) {
    medicalBackgroundRepository.findByMedicalBackgroundTypeId(id)
        .ifPresent(allergy -> {
          throw new OperationNotPermittedException(
              "Cannot delete this medical background type: Already linked to a medical background",
              "delete",
              MedicalBackgroundType.class.getSimpleName(),
              MedicalBackground.class.getSimpleName()
          );
        });
    repository.deleteById(id);
  }
}
