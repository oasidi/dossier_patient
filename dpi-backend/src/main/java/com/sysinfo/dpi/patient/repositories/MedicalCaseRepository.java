package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.MedicalCase;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */
public interface MedicalCaseRepository extends JpaRepository<MedicalCase, Integer> {

  List<MedicalCase> findAllByPatientId(Integer patientId);
}
