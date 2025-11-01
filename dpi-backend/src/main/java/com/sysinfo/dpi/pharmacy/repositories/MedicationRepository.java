package com.sysinfo.dpi.pharmacy.repositories;

import com.sysinfo.dpi.pharmacy.models.Medication;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 15.08.22
 */
public interface MedicationRepository extends JpaRepository<Medication, Integer> {

}
