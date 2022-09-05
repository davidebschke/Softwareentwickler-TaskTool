package com.example.backend.sett.messages;

import com.example.backend.sett.messages.MessageRepo;
import com.example.backend.sett.messages.MessageService;
import com.example.backend.sett.messages.Onemessage;
import com.example.backend.sett.projects.Project;
import com.example.backend.sett.projects.Projectrepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ServiceTest {

    List<Onemessage> messageList = List.of(

            new Onemessage("0", "2", "David", "Alf", "STT", "2022-09-09"),
            new Onemessage("0", "2", "David", "Alf", "STT", "2022-09-09"),
            new Onemessage("0", "2", "David", "Alf", "STT", "2022-09-09")
    );

    private final MessageRepo messageRepo = mock(MessageRepo.class);
    private final MessageService messageService = new MessageService(messageRepo);

    private final Onemessage onemessage = new Onemessage("0", "^", "David", "Alf", "Shop", "2022-08-03");

    @Test
    void getMessages() {

        when(messageRepo.findAll()).thenReturn(messageList);
        List<Onemessage> actual = messageService.getMessages();
        Assertions.assertArrayEquals(messageList.toArray(), actual.toArray());
    }
}
