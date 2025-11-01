package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.patient.dto.AllergyTypeDto;
import com.sysinfo.dpi.common.exceptions.OperationNotPermittedException;
import com.sysinfo.dpi.patient.models.Allergy;
import com.sysinfo.dpi.patient.models.AllergyType;
import com.sysinfo.dpi.patient.repositories.AllergyRepository;
import com.sysinfo.dpi.patient.repositories.AllergyTypeRepository;
import com.sysinfo.dpi.patient.services.AllergyTypeService;
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
public class AllergyTypeServiceImpl implements AllergyTypeService {

  private final AllergyTypeRepository repository;
  private final AllergyRepository allergyRepository;
  private final ClassValidator<AllergyTypeDto> validator;

  @Override
  public Integer save(AllergyTypeDto dto) {
    validator.validate(dto);
    return repository.save(AllergyTypeDto.toEntity(dto)).getId();
  }

  @Override
  public List<AllergyTypeDto> findAll() {
    return repository.findAll()
        .stream()
        .map(AllergyTypeDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public AllergyTypeDto findById(Integer id) {
    return repository.findById(id)
        .map(AllergyTypeDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No Allergy type was found with the provided ID : %s", id)));
  }

  @Override
  public void delete(Integer id) {
    allergyRepository.findByAllergyTypeId(id)
        .ifPresent(allergy -> {
          throw new OperationNotPermittedException(
              "Cannot delete this allergy type: Already linked to an allergy",
              "delete",
              AllergyType.class.getSimpleName(),
              Allergy.class.getSimpleName()
          );
        });
    repository.deleteById(id);
  }
}
