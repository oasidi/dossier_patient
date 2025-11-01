package com.sysinfo.dpi.patient.services.impl;

import com.sysinfo.dpi.common.exceptions.OperationNotPermittedException;
import com.sysinfo.dpi.common.validators.ClassValidator;
import com.sysinfo.dpi.patient.dto.LightPatientDto;
import com.sysinfo.dpi.patient.dto.PatientSearchCriteria;
import com.sysinfo.dpi.patient.models.Allergy;
import com.sysinfo.dpi.patient.models.Constant;
import com.sysinfo.dpi.patient.models.Patient;
import com.sysinfo.dpi.patient.repositories.AllergyRepository;
import com.sysinfo.dpi.patient.repositories.ConstantRepository;
import com.sysinfo.dpi.patient.repositories.MedicalBackgroundRepository;
import com.sysinfo.dpi.patient.repositories.PatientRepository;
import com.sysinfo.dpi.patient.services.PatientService;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */

@RequiredArgsConstructor
@Service
@Slf4j
public class PatientServiceImpl implements PatientService {

  private final PatientRepository repository;
  private final ConstantRepository constantRepository;
  private final AllergyRepository allergyRepository;
  private final MedicalBackgroundRepository medicalBackgroundRepository;
  private final ClassValidator<LightPatientDto> validator;
  private final EntityManager em;

  @Override
  public Integer save(LightPatientDto patient) {
    validator.validate(patient);
    Patient patientToSave = LightPatientDto.toEntity(patient);
    return repository.save(patientToSave).getId();
  }

  @Override
  public LightPatientDto findById(Integer id) {
    return repository.findById(id)
        .map(LightPatientDto::fromEntity)
        .orElseThrow(() -> {
          log.info(String.format("No patient was found with the given ID %s", id));
          return new EntityNotFoundException(String.format("No patient was found with the given ID %s", id));
        });
  }

  @Override
  public List<LightPatientDto> findAll() {
    return repository.findAll()
        .stream()
        .map(LightPatientDto::fromEntity)
        .collect(Collectors.toList());
  }

  @Override
  public List<LightPatientDto> searchPatient(PatientSearchCriteria criteria) {
    CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
    CriteriaQuery<Patient> criteriaQuery = criteriaBuilder.createQuery(Patient.class);
    List<Predicate> predicates = new ArrayList<>();

    Root<Patient> root = criteriaQuery.from(Patient.class);
    if (StringUtils.hasLength(criteria.getNationalId())) {
      Predicate nationalId = criteriaBuilder.like(root.get("nationalId"), "%" + criteria.getNationalId() + "%");
      predicates.add(nationalId);
    }
    if (StringUtils.hasLength(criteria.getFirstName())) {
      Predicate firstname = criteriaBuilder.like(criteriaBuilder.lower(root.get("firstname")), "%" + criteria.getFirstName().toLowerCase() + "%");
      predicates.add(firstname);
    }
    if (StringUtils.hasLength(criteria.getLastname())) {
      Predicate lastname = criteriaBuilder.like(criteriaBuilder.lower(root.get("lastname")), "%" + criteria.getLastname().toLowerCase() + "%");
      predicates.add(lastname);
    }
    if (StringUtils.hasLength(criteria.getMiddleName())) {
      Predicate middleName = criteriaBuilder.like(criteriaBuilder.lower(root.get("middleName")), "%" + criteria.getMiddleName().toLowerCase() + "%");
      predicates.add(middleName);
    }
    if (StringUtils.hasLength(criteria.getPhoneNumber())) {
      Predicate phoneNumber = criteriaBuilder.equal(root.get("phoneNumber"), criteria.getPhoneNumber());
      predicates.add(phoneNumber);
    }
    if (StringUtils.hasLength(criteria.getEmail())) {
      Predicate email = criteriaBuilder.like(criteriaBuilder.lower(root.get("email")), "%" + criteria.getEmail().toLowerCase() + "%");
      predicates.add(email);
    }
    if (criteria.getSexe() != null) {
      Predicate sexe = criteriaBuilder.equal(root.get("sexe"), criteria.getSexe());
      predicates.add(sexe);
    }
    if (criteria.getBirthdate() != null) {
      Predicate birthdate = criteriaBuilder.equal(root.get("birthdate"), criteria.getBirthdate());
      predicates.add(birthdate);
    }
    criteriaQuery.where(
        criteriaBuilder.and(
            predicates.toArray(new Predicate[0])
        )
    );
    TypedQuery<Patient> query = em.createQuery(criteriaQuery);
    return query.getResultList()
        .stream()
        .map(LightPatientDto::fromEntity)
        .sorted(Comparator.comparing(LightPatientDto::getDate).reversed())
        .collect(Collectors.toList());
  }

  @Override
  public void delete(Integer patientId) {
    if (constantRepository.findAllByPatientId(patientId).size() > 0) {
      throw new OperationNotPermittedException(
          "Cannot delete this patient: Already linked to a constant",
          "delete",
          Patient.class.getSimpleName(),
          Constant.class.getSimpleName()
      );
    }

    if (allergyRepository.findAllByPatientId(patientId).size() > 0) {
      throw new OperationNotPermittedException(
          "Cannot delete this patient: Already linked to an allergy",
          "delete",
          Patient.class.getSimpleName(),
          Allergy.class.getSimpleName()
      );
    }

    if (medicalBackgroundRepository.findAllByPatientId(patientId).size() > 0) {
      throw new OperationNotPermittedException(
          "Cannot delete this patient: Already linked to a medical background",
          "delete",
          Patient.class.getSimpleName(),
          Allergy.class.getSimpleName()
      );
    }

    repository.deleteById(patientId);
  }
}
