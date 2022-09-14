package com.example.backend.sett.messages;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class IntegrationsTest {

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
    }

    @DirtiesContext
    @Test
    void addMessage() throws Exception {
        mockMvc.perform(post(
                        "/stt/messages")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"title": "Shop"}
                                """)
                )
                .andExpect(status().is(201))
                .andExpect(content().json("""
                        {
                                "title": "Shop"
                                }
                        """));

    }

    @DirtiesContext
    @Test
    void notFoundDeleteTest() throws Exception {

        String id = "1";

        mockMvc.perform(delete("/stt/messages/" + id))
                .andExpect(status().is(404));

    }
}

