package com.sysinfo.dpi.common.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author Ali Bouali
 * @since 23.04.22
 */

@AllArgsConstructor
@Getter
public class OperationNotPermittedException extends RuntimeException {

  private final String errorMsg;

  private final String operationId;

  private final String source;

  private final String dependency;

}
