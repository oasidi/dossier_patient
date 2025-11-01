package com.sysinfo.dpi.common.exceptions;

import lombok.Getter;

/**
 * @author Houssem BOUALI
 * @since 11/05/2022
 **/
@Getter
public class DataNotFoundException extends RuntimeException {

    private String operation;
    private String message;

    public DataNotFoundException() {
    }

    public DataNotFoundException(String operation, String message) {
        this.operation = operation;
        this.message = message;
    }
}
