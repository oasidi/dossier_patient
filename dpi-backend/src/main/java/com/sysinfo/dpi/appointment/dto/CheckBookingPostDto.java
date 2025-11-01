package com.sysinfo.dpi.appointment.dto;

import com.sysinfo.dpi.appointment.utils.Constants;
import java.time.LocalDate;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * @author Houssem BOUALI
 * @since 22/05/2022
 **/
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CheckBookingPostDto {

  @Min(1)
  @NotNull
  private Integer serviceId;
  @Min(1)
  @NotNull
  private Integer patientId;
  @NotNull
  @DateTimeFormat(pattern = Constants.DATE_FORMAT)
  private LocalDate date;

}
