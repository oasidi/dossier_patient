package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.MedicalBackground;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */
public interface MedicalBackgroundRepository extends JpaRepository<MedicalBackground, Integer> {

  List<MedicalBackground> findAllByPatientId(Integer id);

  Optional<MedicalBackground> findByMedicalBackgroundTypeId(Integer id);
}
