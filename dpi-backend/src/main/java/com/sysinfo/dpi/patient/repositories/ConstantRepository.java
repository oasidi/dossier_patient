package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.Constant;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */
public interface ConstantRepository extends JpaRepository<Constant, Integer> {

  List<Constant> findAllByPatientId(Integer patientId);

  Optional<Constant> findByConstantTypeId(Integer id);
}
