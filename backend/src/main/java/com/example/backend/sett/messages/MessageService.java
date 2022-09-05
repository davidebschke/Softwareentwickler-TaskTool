package com.example.backend.sett.messages;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class MessageService {

    MessageRepo messageRepo;

    public List<OneMessage> getMessages() {
        return messageRepo.findAll();
    }

    public String getRandomId() {
        return UUID.randomUUID().toString();
    }

    public boolean deleteMessage(String id) {
        if (messageRepo.existsById(id)) {
            messageRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
