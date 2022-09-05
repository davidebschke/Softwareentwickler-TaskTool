package com.example.backend.sett.messages;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ServiceTest {

    List<OneMessage> messageList = List.of(

            new OneMessage("0", "2", "David", "Alf", "STT", "2022-09-09", "Hallo ", "Shop"),
            new OneMessage("0", "2", "David", "Alf", "STT", "2022-09-09", "Hallo ", "Shop"),
            new OneMessage("0", "2", "David", "Alf", "STT", "2022-09-09", "Hallo ", "Shop")

    );

    private final MessageRepo messageRepo = mock(MessageRepo.class);
    private final MessageService messageService = new MessageService(messageRepo);

    private final OneMessage onemessage = new OneMessage("0", "2", "David", "Alf", "STT", "2022-09-09", "Hallo ", "Shop");

    @Test
    void getMessages() {

        when(messageRepo.findAll()).thenReturn(messageList);
        List<OneMessage> actual = messageService.getMessages();
        Assertions.assertArrayEquals(messageList.toArray(), actual.toArray());
    }
}
