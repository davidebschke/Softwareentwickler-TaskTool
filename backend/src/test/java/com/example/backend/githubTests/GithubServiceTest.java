package com.example.backend.githubTests;

import com.example.backend.Projects.githubStatus.GithubService;
import com.example.backend.Projects.githubStatus.OneIssue;
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
class GithubServiceTest {

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


        String username="davidebschke";
        String repositoryName="Softwareentwickler-TaskTool";
        mockWebServer.enqueue(new MockResponse()
                .setResponseCode(200)
                .setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON)
                .setBody("""
            [OneIssue[repositoryName=null, created_at=2022-08-30T06:50:26Z, login=null]]"""));

        List<Integer> issueNumberList = Collections.singletonList(githubService.getAllIssuesFromRepository(username,repositoryName).size());
        Integer issueNumber= issueNumberList.get(0);
        issueNumber=issueNumber-1;
        List<OneIssue> response = Collections.singletonList(githubService.getAllIssuesFromRepository(username,repositoryName).get(issueNumber));

        assertThat(response).hasOnlyElementsOfType(OneIssue.class);
    }
}
