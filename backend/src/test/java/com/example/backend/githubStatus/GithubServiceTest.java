package com.example.backend.githubStatus;

import com.example.backend.sett.githubstatus.GithubService;
import com.example.backend.sett.githubstatus.OneIssue;
import com.example.backend.sett.githubstatus.OneRepository;
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
import static reactor.core.publisher.Mono.when;


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

        List<Integer> issueNumberListOpen = Collections.singletonList(githubService.getAllOpenIssuesFromRepository(username,repositoryName).size());
        Integer issueNumber= issueNumberListOpen.get(0);
        issueNumber=issueNumber-1;
        List<com.example.backend.sett.githubstatus.OneIssue> response = Collections.singletonList(githubService.getAllOpenIssuesFromRepository(username, repositoryName).get(issueNumber));

        assertThat(response).hasOnlyElementsOfType(OneIssue.class);
    }

    @Test
    @DirtiesContext

    void getRepositoryinformation(){

        String username = "davidebschke";
        String repositoryName = "Softwareentwickler-TaskTool";

        List<Integer> RepoNumberList = Collections.singletonList(githubService.getAllRepositoryInfos(username, repositoryName).size());
        Integer issueNumber = RepoNumberList.get(0);
        issueNumber = issueNumber - 1;
        List<OneRepository> response = Collections.singletonList(githubService.getAllRepositoryInfos(username, repositoryName).get(issueNumber));

        assertThat(response).hasOnlyElementsOfType(OneRepository.class);
    }

    @Test
    @DirtiesContext
    void getCloseIssues() {

        String username = "davidebschke";
        String repositoryName = "Softwareentwickler-TaskTool";

        mockWebServer.enqueue(new MockResponse()
                .setResponseCode(200)
                .setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON)
                .setBody(""" 
                        ["ABC"]
                        """));

        List<OneIssue> response = githubService.getAllCloseIssuesFromRepository(username, repositoryName);

        assertThat(response).hasOnlyElementsOfType(OneIssue.class);

    }


}

