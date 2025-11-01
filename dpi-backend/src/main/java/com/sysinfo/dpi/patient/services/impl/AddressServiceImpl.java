package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.patient.dto.AddressDto;
import com.sysinfo.dpi.patient.repositories.AddressRepository;
import com.sysinfo.dpi.patient.services.AddressService;
import java.util.List;
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
public class AddressServiceImpl implements AddressService {

  private final AddressRepository repository;
  private final ClassValidator<AddressDto> validator;

  @Override
  public Integer save(AddressDto dto) {
    validator.validate(dto);
    return repository.save(AddressDto.toEntity(dto)).getId();
  }

  @Override
  public AddressDto findById(Integer id) {
    return repository.findById(id)
        .map(AddressDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No Address was found with the provided id %s", id)));
  }

  // do not implement -> not needed
  @Override
  public List<AddressDto> findAll() {
    return null;
  }

  @Override
  public void delete(Integer id) {
    repository.deleteById(id);
  }

  @Override
  public AddressDto findByPatientId(Integer patientId) {
    return repository.findByPatientId(patientId)
        .map(AddressDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No Address was found with the provided id %s", patientId)));
  }
}
