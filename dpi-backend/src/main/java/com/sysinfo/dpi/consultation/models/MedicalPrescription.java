package com.sysinfo.dpi.consultation.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import lombok.AllArgsConstructor;
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
@Entity
@DiscriminatorValue("1")
public class MedicalPrescription extends Prescription {

}
