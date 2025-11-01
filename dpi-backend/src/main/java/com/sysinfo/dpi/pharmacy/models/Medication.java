package com.sysinfo.dpi.pharmacy.models;

import com.sysinfo.dpi.common.models.AbstractEntity;
import java.math.BigDecimal;
import javax.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 * @author Ali Bouali
 * @since 15.08.22
 */

@SuperBuilder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Medication extends AbstractEntity {

  private String code;

  private String name;

  private String description;

  // todo - check to externalise to a table
  private String type;

  private BigDecimal price;

}
