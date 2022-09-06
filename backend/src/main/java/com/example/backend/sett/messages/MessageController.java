package com.example.backend.sett.messages;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stt/messages")
public class MessageController {

    MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping
    public List<OneMessage> listMessages() {
        return messageService.getMessages();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable String id) {
        boolean deleteSuccess = messageService.deleteMessage(id);
        return new ResponseEntity<>(deleteSuccess ? HttpStatus.NO_CONTENT : HttpStatus.NOT_FOUND);
    }
}
