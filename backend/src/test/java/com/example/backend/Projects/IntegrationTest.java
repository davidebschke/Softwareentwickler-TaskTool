package com.example.backend.Projects;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
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

    @DirtiesContext
    @Test
    void deleteProject() throws Exception {

        String saveResult = mockMvc.perform(post(
                "/stt/projects")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {"projectName": "Shop"}
                        """)
        ).andReturn().getResponse().getContentAsString();

        Project saveResultProject = objectMapper.readValue(saveResult, Project.class);
        String id = saveResultProject.id;

        mockMvc.perform(delete("http://localhost:8080/stt/projects/" + id))
                .andExpect(status().is(204));

        mockMvc.perform(get("http://localhost:8080/stt/projects"))
                .andExpect(status().is(200))
                .andExpect(content().json("""
                        []
                        """));
    }
}
