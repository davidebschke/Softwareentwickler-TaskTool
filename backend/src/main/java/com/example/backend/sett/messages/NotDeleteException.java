package com.example.backend.sett.messages;

public class NotDeleteException extends RuntimeException {

    public NotDeleteException(String id) {
        super("Object not delete this message dont exist. ID:" + id);

    }
}
