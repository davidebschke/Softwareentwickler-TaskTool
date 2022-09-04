package com.example.backend.sett.messages;

import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;

public class Onemessage {

    @Id
    @NotNull
    String id;
    @NotNull
    String messageNumber;
    @NotNull
    String sender;
    @NotNull
    String receiver;
    String projectName;
    @NotNull
    String sendDate;
}
