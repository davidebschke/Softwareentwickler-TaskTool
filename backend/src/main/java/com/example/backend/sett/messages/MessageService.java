package com.example.backend.sett.messages;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MessageService {

    MessageRepo messageRepo;

    public List<OneMessage> getMessages() {
        return messageRepo.findAll();
    }

    public boolean deleteMessage(String id) {

        if (messageRepo.existsById(id)) {
            messageRepo.deleteById(id);
            return true;
        } else {
            messageRepo.findById(id).orElseThrow(() -> new NotDeleteException(id));
            return false;
        }
    }
}
