package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.Allergy;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */
public interface AllergyRepository extends JpaRepository<Allergy, Integer> {

  List<Allergy> findAllByPatientId(Integer id);

  Optional<Allergy> findByAllergyTypeId(Integer id);
}
