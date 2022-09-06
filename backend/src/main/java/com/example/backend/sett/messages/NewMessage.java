package com.example.backend.sett.messages;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@Builder
public class NewMessage {

    @NotNull
    String number;
    @NotNull
    String sender;
    @NotNull
    String receiver;
    String projectName;
    @NotNull
    String created_at;
    @NotNull
    String message;
    String title;
}
