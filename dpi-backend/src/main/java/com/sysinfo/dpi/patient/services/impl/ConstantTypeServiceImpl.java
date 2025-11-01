package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.common.exceptions.OperationNotPermittedException;
import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.patient.dto.ConstantTypeDto;
import com.sysinfo.dpi.patient.models.Constant;
import com.sysinfo.dpi.patient.models.ConstantType;
import com.sysinfo.dpi.patient.repositories.ConstantRepository;
import com.sysinfo.dpi.patient.repositories.ConstantTypeRepository;
import com.sysinfo.dpi.patient.services.ConstantTypeService;
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
public class ConstantTypeServiceImpl implements ConstantTypeService {

  private final ConstantTypeRepository repository;
  private final ConstantRepository constantRepository;
  private final ClassValidator<ConstantTypeDto> validator;

  @Override
  public Integer save(ConstantTypeDto dto) {
    validator.validate(dto);
    return repository.save(ConstantTypeDto.toEntity(dto)).getId();
  }

  @Override
  public List<ConstantTypeDto> findAll() {
    return repository.findAll()
        .stream()
        .map(ConstantTypeDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public ConstantTypeDto findById(Integer id) {
    return repository.findById(id)
        .map(ConstantTypeDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No Allergy type was found with the provided ID : %s", id)));
  }

  @Override
  public void delete(Integer id) {
    constantRepository.findByConstantTypeId(id)
        .ifPresent(allergy -> {
          throw new OperationNotPermittedException(
              "Cannot delete this constant type: Already linked to a constant",
              "delete",
              ConstantType.class.getSimpleName(),
              Constant.class.getSimpleName()
          );
        });
    repository.deleteById(id);
  }
}
