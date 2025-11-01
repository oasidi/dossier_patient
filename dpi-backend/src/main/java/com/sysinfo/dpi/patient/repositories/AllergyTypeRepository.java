package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.AllergyType;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 18.04.22
 */
public interface AllergyTypeRepository extends JpaRepository<AllergyType, Integer> {

}
