package com.sysinfo.dpi.patient.repositories;

import com.sysinfo.dpi.patient.models.Preference;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */
public interface PreferenceRepository extends JpaRepository<Preference, Integer> {

  List<Preference> findAllByPatientId(Integer patientId);
}
