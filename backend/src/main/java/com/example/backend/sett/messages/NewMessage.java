package com.example.backend.sett.messages;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NewMessage {

    String number;

    String sender;
    String receiver;
    String projectName;

    String created_on;
    String message;
    String title;
}
