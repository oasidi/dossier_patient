package com.sysinfo.dpi.consultation.repositories;

import com.sysinfo.dpi.consultation.models.Analysis;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 09.06.22
 */
public interface AnalysisRepository extends JpaRepository<Analysis, Integer> {

}
