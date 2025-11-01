package com.sysinfo.dpi.common.exceptions;

import lombok.Getter;

/**
 * @author Houssem BOUALI
 * @since 14/05/2022
 **/
@Getter
public class IllegalArgsException extends RuntimeException{

    private String operation;
    private String message;

    public IllegalArgsException(String operation, String message) {
        this.operation = operation;
        this.message = message;
    }
}
