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
public class ConstantType extends AbstractEntity {

  private String constantName;

  private String constantUnit;

  @OneToMany(mappedBy = "constantType")
  private List<Constant> constants;
}
