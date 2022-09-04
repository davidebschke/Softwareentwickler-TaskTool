package com.example.backend.sett.messages;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MessageService {

    MessageRepo messageRepo;

    public List<Onemessage> getMessages() {
        return messageRepo.findAll();
    }

    public String getRandomId() {
        return UUID.randomUUID().toString();
    }

}
