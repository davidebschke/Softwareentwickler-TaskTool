package com.example.backend.githubTests;

import com.example.backend.Projects.GithubStatus.GithubService;
import com.example.backend.Projects.GithubStatus.OneIssue;
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


@AutoConfigureMockMvc
@SpringBootTest
public class GithubServiceTest {

    @Autowired
    MockMvc mockMvc;
    private final MockWebServer mockWebServer = new MockWebServer();
    private final GithubService githubService = new GithubService();
    @AfterEach
    public void shutDown() throws IOException {
        mockWebServer.shutdown();
    }

    @Test
    @DirtiesContext
    void getIssues() {

        mockWebServer.enqueue(new MockResponse()
                .setResponseCode(200)
                .setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON)
                .setBody("""
            [OneIssue[repositoryName=null, created_at=2022-08-29T16:22:38Z, login=null]]"""));

        List<OneIssue> response = Collections.singletonList(githubService.getAllIssues("davidebschke","Softwareentwickler-TaskTool").get(2));

        assertThat(response).hasToString("""
                 [OneIssue[repositoryName=null, created_at=2022-08-29T16:22:38Z, login=null]]""");
    }
}
