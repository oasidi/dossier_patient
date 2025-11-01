package com.sysinfo.dpi.patient.models;

import com.sysinfo.dpi.common.models.AbstractEntity;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.Type;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */

@SuperBuilder
@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class MedicalCaseType extends AbstractEntity {

  @Type(type = "text")
  private String title;

  @Type(type = "text")
  private String description;

  @OneToMany(mappedBy = "medicalCaseType")
  private List<MedicalCase> medicalCases;

}
