package com.sysinfo.dpi.appointment.models;

import com.sysinfo.dpi.common.models.AbstractEntity;
import com.sysinfo.dpi.hospital.models.MedicalService;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 * @author Houssem BOUALI
 * @since 12/05/2022
 **/
@SuperBuilder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Booking extends AbstractEntity {

  private LocalDate bookingDate;
  private LocalTime startHour;
  private LocalTime endHour;

  @ManyToOne
  @JoinColumn(name = "serviceId")
  private MedicalService service;

  @OneToMany(mappedBy = "booking")
  private List<Appointment> appointments = new ArrayList<>();
}
