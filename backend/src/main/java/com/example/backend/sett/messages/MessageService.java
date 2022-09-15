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

    public boolean deleteMessage(String id) {

        messageRepo.findById(id).orElseThrow(() -> new NotDeleteException(id));

        if (messageRepo.existsById(id)) {
            messageRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public String getRandomId() {
        return UUID.randomUUID().toString();
    }

    public OneMessage addMessage(NewMessage newMessage) {
        return messageRepo.save(new OneMessage(
                getRandomId(),
                newMessage.number,
                newMessage.sender,
                newMessage.receiver,
                newMessage.projectName,
                newMessage.created_on,
                newMessage.message,
                newMessage.title
        ));
    }
}
