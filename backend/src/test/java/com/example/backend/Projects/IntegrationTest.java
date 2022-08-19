package com.example.backend.Projects;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
public class IntegrationTest {

    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    MockMvc mockMvc;

    @Test
    void testGetProjects() throws Exception {
        mockMvc.perform(get("/stt/projects")).andExpect(status().is(200));
    }


    @DirtiesContext
    @Test
    void addProject() throws Exception {
        mockMvc.perform(post(
                        "/stt/projects")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"projectName": "Shop",
                                "projectNumber": "1995",
                                "projectMember":"Karl"}
                                """)
                )
                .andExpect(status().is(201))
                .andExpect(content().json("""
                        {
                                "projectName": "Shop",
                                "projectNumber": 1995,
                                "projectMember":"Karl"}
                        """));
    }
}


