package com.sysinfo.dpi.appointment.dto;

import com.sysinfo.dpi.appointment.models.Booking;
import com.sysinfo.dpi.appointment.utils.Constants;
import com.sysinfo.dpi.hospital.models.MedicalService;
import java.time.LocalDate;
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
public class BookingDto {

  private Integer id;
  private Integer serviceId;
  @DateTimeFormat(pattern = Constants.DATE_FORMAT)
  private LocalDate bookingDate;

  public static BookingDto fromEntity(Booking booking) {
    if (booking != null) {
      return BookingDto.builder()
          .id(booking.getId())
          .serviceId(booking.getService().getId())
          .bookingDate(booking.getBookingDate())
          .build();
    }
    return null;
  }

  public static Booking toEntity(BookingDto bookingDto) {
    if (bookingDto != null) {
      return Booking.builder()
          .id(bookingDto.getId())
          .service(
              MedicalService.builder()
                  .id(bookingDto.getServiceId())
                  .build()
          )
          .bookingDate(bookingDto.getBookingDate())
          .build();
    }
    return null;
  }
}
