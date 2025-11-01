package com.sysinfo.dpi.consultation.repositories;

import com.sysinfo.dpi.consultation.models.Consultation;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author Ali Bouali
 * @since 09.06.22
 */
public interface ConsultationRepository extends JpaRepository<Consultation, Integer> {

  @Query("from Consultation c inner join Appointment a on a.consultation.id = c.id where a.patient.id =:patientId")
  List<Consultation> findByPatientId(Integer patientId);

  @Query("from Consultation c inner join Appointment a on a.consultation.id = c.id inner join Booking b on a.booking.id = b.id where b.service.id "
      + "=:serviceId")
  List<Consultation> findByServiceId(Integer serviceId);

  List<Consultation> findAllByCreatedBy(String doctorId);
}
