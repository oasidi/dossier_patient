package com.sysinfo.dpi.common.handlers;

import com.sysinfo.dpi.common.exceptions.ExceptionRepresentation;
import com.sysinfo.dpi.common.exceptions.ObjectValidationException;
import com.sysinfo.dpi.common.exceptions.OperationNotPermittedException;
import javax.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ObjectValidationException.class)
  public ResponseEntity<ExceptionRepresentation> handleException(ObjectValidationException exception) {
    ExceptionRepresentation exceptionRepresentation = ExceptionRepresentation.builder()
        .errorMessage("Object not valid Exception")
        .errorSource(exception.getValidationSource())
        .validationErrors(exception.getViolations())
        .build();
    return ResponseEntity.badRequest().body(exceptionRepresentation);
  }

  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<ExceptionRepresentation> handleException(EntityNotFoundException exception) {
    ExceptionRepresentation exceptionRepresentation = ExceptionRepresentation.builder()
        .errorMessage(exception.getMessage())
        .build();
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exceptionRepresentation);
  }

  @ExceptionHandler(OperationNotPermittedException.class)
  public ResponseEntity<ExceptionRepresentation> handleException(OperationNotPermittedException exception) {
    ExceptionRepresentation exceptionRepresentation = ExceptionRepresentation.builder()
        .errorMessage(exception.getMessage())
        .build();
    return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(exceptionRepresentation);
  }

}
