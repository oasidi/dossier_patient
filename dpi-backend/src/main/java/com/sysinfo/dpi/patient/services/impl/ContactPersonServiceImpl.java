package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.patient.dto.ContactPersonDto;
import com.sysinfo.dpi.patient.repositories.ContactPersonRepository;
import com.sysinfo.dpi.patient.services.ContactPersonService;

import java.util.List;
import javax.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * @author Ali Bouali
 * @since 30.04.22
 */

@Service
@RequiredArgsConstructor
public class ContactPersonServiceImpl implements ContactPersonService {

  private final ContactPersonRepository repository;
  private final ClassValidator<ContactPersonDto> validator;


  @Override
  public Integer save(ContactPersonDto dto) {
    validator.validate(dto);
    return repository.save(ContactPersonDto.toEntity(dto)).getId();
  }

  @Override
  public ContactPersonDto findById(Integer id) {
    return repository.findById(id)
        .map(ContactPersonDto::fromEntity)
        .orElseThrow(() -> new EntityNotFoundException(String.format("No contact person was found with the provided id %s", id)));
  }

  @Override
  public List<ContactPersonDto> findAll() {
    return null;
  }

  @Override
  public void delete(Integer id) {
    repository.deleteById(id);
  }
}
