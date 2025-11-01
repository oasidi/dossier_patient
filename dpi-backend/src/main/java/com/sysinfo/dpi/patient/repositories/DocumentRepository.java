package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.Document;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */
public interface DocumentRepository extends JpaRepository<Document, Integer> {

}
