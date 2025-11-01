package com.sysinfo.dpi.hospital.repositories;

import com.sysinfo.dpi.hospital.models.MedicalService;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 13.05.22
 */
public interface MedicalServiceRepository extends JpaRepository<MedicalService, Integer> {

}
