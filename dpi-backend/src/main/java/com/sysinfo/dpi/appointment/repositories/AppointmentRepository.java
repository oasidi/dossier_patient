package com.sysinfo.dpi.appointment.repositories;

import com.sysinfo.dpi.appointment.models.Appointment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Houssem BOUALI
 * @since 11/05/2022
 **/
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

  List<Appointment> findAllByPatientId(Integer patientId);
}
