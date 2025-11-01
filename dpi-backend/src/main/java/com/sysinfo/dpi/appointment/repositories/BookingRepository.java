package com.sysinfo.dpi.appointment.repositories;

import com.sysinfo.dpi.appointment.models.Booking;
import java.time.LocalDate;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Houssem BOUALI
 * @since 11/05/2022
 **/
public interface BookingRepository extends JpaRepository<Booking, Integer> {

  Optional<Booking> findByBookingDate(LocalDate date);

  Optional<Booking> findByServiceCodeAndBookingDate(String serviceCode, LocalDate date);

  Optional<Booking> findByServiceIdAndBookingDate(Integer serviceId, LocalDate bookingDate);
}
