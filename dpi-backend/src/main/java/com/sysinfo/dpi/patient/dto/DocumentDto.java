package com.sysinfo.dpi.patient.dto;

import com.sysinfo.dpi.patient.models.Document;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor

public class DocumentDto {

  private Integer patientId;

  public static DocumentDto fromEntity(Document document) {
    return DocumentDto.builder()
        .build();
  }

  public static Document toEntity(Document dto) {
    return Document.builder()
        .build();
  }

}
