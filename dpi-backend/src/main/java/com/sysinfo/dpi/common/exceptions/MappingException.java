package com.sysinfo.dpi.common.exceptions;

import lombok.Getter;

/**
 * @author Houssem BOUALI
 * @since 11/05/2022
 **/
@Getter
public class MappingException extends RuntimeException {

    private String operation;
    private String message;

    public MappingException() {
    }

    public MappingException(String operation, String message) {
        this.operation = operation;
        this.message = message;
    }
}
