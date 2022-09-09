package com.example.backend.sett.projects;


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
class IntegrationTest {

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
                                {"projectName": "Shop"
                                }
                                """)
                )
                .andExpect(status().is(201))
                .andExpect(content().json("""
                        {
                                "projectName": "Shop"
                                }
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

        mockMvc.perform(delete("http://localhost:8080/stt/projects").content("""
                        ["<ID>"]
                        """.replaceFirst("<ID>",id)).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(200));

       /* mockMvc.perform(delete("http://localhost:8080/stt/projects").content("""
                        ["<ID>"]
                        """.replaceFirst("<ID>",id)).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(404));*/

        mockMvc.perform(get("http://localhost:8080/stt/projects"))
                .andExpect(status().is(200))
                .andExpect(content().json("""
                        []
                        """));
    }

    @DirtiesContext
    @Test
    void updateProject() throws Exception {

        String saveResult = mockMvc.perform(post(
                "/stt/projects")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {"projectName":"Shop",
                        "created_at":"2020-01-01"}
                        """)
        ).andReturn().getResponse().getContentAsString();

        Project saveResultProject = objectMapper.readValue(saveResult, Project.class);

         mockMvc.perform(put("/stt/projects").contentType(MediaType.APPLICATION_JSON).content("""
                         {"id":"<ID>",
                         "projectName":"Aligator",
                         "created_at":"2022-01-01"}
                 """.replaceFirst("<ID>",saveResultProject.id))).andExpect(status().isOk()).andExpect(content().json("""
                         {"id":"<ID>",
                         "projectName":"Aligator",
                         "created_at":"2022-01-01"}
                 """.replaceFirst("<ID>",saveResultProject.id)));
    }
}
