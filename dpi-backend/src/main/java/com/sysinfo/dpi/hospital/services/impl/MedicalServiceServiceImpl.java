package com.sysinfo.dpi.hospital.services.impl;

import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.hospital.dto.MedicalServiceDto;
import com.sysinfo.dpi.hospital.repositories.MedicalServiceRepository;
import com.sysinfo.dpi.hospital.services.MedicalServiceService;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Ali Bouali
 * @since 13.05.22
 */
@Service
@RequiredArgsConstructor
public class MedicalServiceServiceImpl implements MedicalServiceService {

  private final MedicalServiceRepository repository;
  private final ClassValidator<MedicalServiceDto> validator;

  @Override
  public Integer save(MedicalServiceDto dto) {
    validator.validate(dto);
    return repository.save(MedicalServiceDto.toEntity(dto)).getId();
  }

  @Override
  public MedicalServiceDto findById(Integer id) {
    return repository.findById(id)
        .map(MedicalServiceDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No medical service was found with the id %d", id)));
  }

  @Override
  public List<MedicalServiceDto> findAll() {
    return repository.findAll()
        .stream()
        .map(MedicalServiceDto::fromEntity)
        .sorted(Comparator.comparing(MedicalServiceDto::getDate).reversed())
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer id) {
    // todo check delete
    repository.deleteById(id);
  }
}
