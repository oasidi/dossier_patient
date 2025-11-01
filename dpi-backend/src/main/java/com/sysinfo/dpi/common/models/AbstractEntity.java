package com.sysinfo.dpi.common.models;

import java.time.Instant;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

/**
 * @author Ali Bouali
 * @since 17.04.22
 */

@Data
@SuperBuilder
@NoArgsConstructor
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class AbstractEntity {

  @Id
  @GeneratedValue
  private Integer id;

  @CreatedDate
  @Column(name = "creationDate", nullable = false, updatable = false)
  private Instant creationDate;

  @LastModifiedDate
  @Column(name = "lastModifiedDate")
  private Instant lastModifiedDate;

  @CreatedBy
  @Column(updatable = false, nullable = false)
  private String createdBy;

  @LastModifiedBy
  private String updatedBy;
}
