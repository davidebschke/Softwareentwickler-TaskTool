package com.example.backend.sett.messages;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;

@Data
@Builder
public class OneMessage {

    @Id
    @NotNull
    String id;
    @NotNull
    String number;
    @NotNull
    String sender;
    @NotNull
    String receiver;
    String projectName;
    @NotNull
    String created_on;
    @NotNull
    String message;
    String title;
}
