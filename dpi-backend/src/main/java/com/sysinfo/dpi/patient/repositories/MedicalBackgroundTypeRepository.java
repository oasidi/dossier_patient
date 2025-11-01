package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.MedicalBackgroundType;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 18.04.22
 */
public interface MedicalBackgroundTypeRepository extends JpaRepository<MedicalBackgroundType, Integer> {

}
