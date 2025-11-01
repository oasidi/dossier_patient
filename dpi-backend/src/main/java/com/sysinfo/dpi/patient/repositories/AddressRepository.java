package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.Address;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 20.04.22
 */
public interface AddressRepository extends JpaRepository<Address, Integer> {

  Optional<Address> findByPatientId(Integer patientId);
}
