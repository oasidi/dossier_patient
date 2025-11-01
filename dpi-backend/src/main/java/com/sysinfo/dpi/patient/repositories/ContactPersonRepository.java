package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.ContactPerson;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 30.04.22
 */
public interface ContactPersonRepository extends JpaRepository<ContactPerson, Integer> {

}
