package com.sysinfo.dpi.consultation.dto;

import com.sysinfo.dpi.consultation.models.Prescription;
import com.sysinfo.dpi.consultation.models.RadiologyRequest;
import java.util.List;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 * @author Ali Bouali
 * @since 08.06.22
 */
@SuperBuilder
@Getter
@Setter
@NoArgsConstructor
public class RadiologyDto extends PrescriptionDto {

}
