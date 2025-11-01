package com.sysinfo.dpi.hospital.services.impl;

import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.hospital.dto.HospitalDto;
import com.sysinfo.dpi.hospital.repositories.HospitalRepository;
import com.sysinfo.dpi.hospital.services.HospitalService;
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
public class HospitalServiceImpl implements HospitalService {

  private final HospitalRepository repository;
  private final ClassValidator<HospitalDto> validator;

  @Override
  public Integer save(HospitalDto dto) {
    validator.validate(dto);
    return repository.save(HospitalDto.toEntity(dto)).getId();
  }

  @Override
  public HospitalDto findById(Integer id) {
    return repository.findById(id)
        .map(HospitalDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No Hospital was found with the id %d", id)));
  }

  @Override
  public List<HospitalDto> findAll() {
    return repository.findAll()
        .stream()
        .map(HospitalDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer id) {
    // todo check delete
    repository.deleteById(id);
  }

  @Override
  public HospitalDto getHospitalInformation() {
    return repository.findAll()
        .stream().findFirst()
        .map(HospitalDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException("No hospital wa found"));
  }
}
