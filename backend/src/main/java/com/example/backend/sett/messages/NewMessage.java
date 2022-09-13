package com.example.backend.sett.messages;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NewMessage {

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
