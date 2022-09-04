package com.example.backend.sett.messages;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stt/messages")
public class MessageController {

    MessageService messageService;

    @GetMapping
    public List<Onemessage> listMessages() {
        return messageService.getMessages();
    }
}
