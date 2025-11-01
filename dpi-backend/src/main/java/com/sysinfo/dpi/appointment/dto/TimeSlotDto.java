package com.sysinfo.dpi.appointment.dto;

import com.sysinfo.dpi.appointment.utils.Constants;
import java.time.LocalTime;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * @author Houssem BOUALI
 * @since 12/05/2022
 **/

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TimeSlotDto {

  private Integer appointmentId;

  private Integer patientId;

  @DateTimeFormat(pattern = Constants.HOUR_FORMAT)
  private LocalTime start;

  @DateTimeFormat(pattern = Constants.HOUR_FORMAT)
  private LocalTime end;

  private boolean available;

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TimeSlotDto that = (TimeSlotDto) o;
    return start.equals(that.start) && end.equals(that.end);
  }

  @Override
  public int hashCode() {
    return Objects.hash(start, end, available);
  }
}
