package com.example.backend.sett.messages;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.*;

public class ServiceTest {

    List<OneMessage> messageList = List.of(
            new OneMessage("0", "2", "David", "Alf", "STT", "2022-09-09", "Hallo ", "Shop"),
            new OneMessage("0", "2", "David", "Alf", "STT", "2022-09-09", "Hallo ", "Shop"),
            new OneMessage("0", "2", "David", "Alf", "STT", "2022-09-09", "Hallo ", "Shop")
    );

    private final MessageRepo messageRepo = mock(MessageRepo.class);
    private final MessageService messageService = new MessageService(messageRepo);


    @Test
    void getMessages() {
        when(messageRepo.findAll()).thenReturn(messageList);
        List<OneMessage> actual = messageService.getMessages();
        Assertions.assertArrayEquals(messageList.toArray(), actual.toArray());
    }

    @Test
    void deleteMessageTest() {
        OneMessage oneMessage = new OneMessage("0", "2", "David", "Alf", "STT", "2022-09-09", "Hallo ", "Shop");

        when(messageRepo.existsById(oneMessage.id)).thenReturn(true);
        doNothing().when(messageRepo).deleteById(oneMessage.id);

        messageService.deleteMessage(oneMessage.id);
        verify(messageRepo).deleteById(oneMessage.id);
    }
}
