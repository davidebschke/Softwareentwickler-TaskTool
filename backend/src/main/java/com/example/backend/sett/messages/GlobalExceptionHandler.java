package com.example.backend.sett.messages;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.LinkedHashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = NotDeleteException.class)
    public ResponseEntity<Object> handleNotDelete(NotDeleteException exception) {
        Map<String, Object> responseBody = new LinkedHashMap<>();
        responseBody.put("message", "Delete not possible");
        return new ResponseEntity<>(responseBody, HttpStatus.NOT_FOUND);

    }
}
