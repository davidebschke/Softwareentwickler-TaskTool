package com.example.backend.sett.githubstatus;

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
class GithubIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @DirtiesContext
    void getAllRepositoryInfosTest() throws Exception {

        mockMvc.perform(post("/stt/github/davidebschke/Softwareentwickler-TaskTool").contentType(MediaType.APPLICATION_JSON).content("""
                {"projectName": "Softwareentwickler-TaskTool"
                }
                """)).andExpect(status().is(200)).andExpect(content().json("""
                {
                        "projectName": "Softwareentwickler-TaskTool"
                        }
                """));
    }

    @Test
    @DirtiesContext
    void addOneIssueTest() throws Exception {

        mockMvc.perform(post(
                        "/stt/github/issue")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"state": "open"
                                }
                                """)
                )
                .andExpect(status().is(201))
                .andExpect(content().json("""
                        {
                                "state": "open"
                                }
                        """));
    }

    @Test
    @DirtiesContext
    void ListIssues() throws Exception {

        mockMvc.perform(get("/stt/github/issue")).andExpect(status().isOk());
    }
}
