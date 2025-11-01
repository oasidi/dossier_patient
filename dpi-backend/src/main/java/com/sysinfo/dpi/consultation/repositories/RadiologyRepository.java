package com.sysinfo.dpi.consultation.repositories;

import com.sysinfo.dpi.consultation.models.Radiology;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 09.06.22
 */
public interface RadiologyRepository extends JpaRepository<Radiology, Integer> {

}
