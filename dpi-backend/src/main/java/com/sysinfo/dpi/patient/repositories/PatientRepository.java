package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */
public interface PatientRepository extends JpaRepository<Patient, Integer> {

}
