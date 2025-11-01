package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.MedicalCaseType;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 01.05.22
 */
public interface MedicalCaseTypeRepository extends JpaRepository<MedicalCaseType, Integer> {

}
