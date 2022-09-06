package com.example.backend.sett.messages;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class IntegrationsTest {

    @Autowired
    MessageRepo messageRepo;
    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    MockMvc mockMvc;

    @Test
    void testGetMessages() throws Exception {
        mockMvc.perform(get("/stt/messages")).andExpect(status().is(200));
    }

    @DirtiesContext
    @Test
    void deleteMessage() throws Exception {

        Boolean testBoolean = null;

        OneMessage TestObject = new OneMessage("2", "22", "David", "Alf", "Webshop",
                "2000-01-01", "Hallo Welt Lorum Ipsum is out", "Your Message");

        messageRepo.save(TestObject);
        String id = TestObject.id;

        messageRepo.existsById(TestObject.id);
        mockMvc.perform(delete("/stt/messages/" + id))
                .andExpect(status().is(204));

        mockMvc.perform(get("/stt/messages"))
                .andExpect(status().is(200))
                .andExpect(content().json("""
                        []
                        """));

        mockMvc.perform(delete("/stt/messages/" + id))
                .andExpect(status().is(404));
    }
}
