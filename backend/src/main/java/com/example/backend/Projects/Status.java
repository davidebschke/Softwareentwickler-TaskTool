package com.example.backend.Projects;

public enum Status {
    Wait("Wait"),
    In_Progress("In_Progress"),
    Done("Done");

    private final String displayName;

    Status(String displayName) {
        this.displayName = displayName;
    }
    @Override
    public String toString() { return displayName; }
}

