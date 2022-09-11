package com.example.backend.sett.githubstatus;

import com.example.backend.sett.projects.Project;
import com.example.backend.sett.projects.Projectrepo;
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@AutoConfigureMockMvc
@SpringBootTest
class GithubServiceTest {

    @Autowired
    MockMvc mockMvc;
    private final MockWebServer mockWebServer = new MockWebServer();

    private final Projectrepo projectrepo = mock(Projectrepo.class);
    private final GithubRepo githubRepo = mock(GithubRepo.class);
    private final GithubService githubService = new GithubService(projectrepo, githubRepo);

    @AfterEach
    public void shutDown() throws IOException {
        mockWebServer.shutdown();
    }

    List<OneIssue> issueList = List.of(

            new OneIssue("1", "Hallo Welt Issue", "open", "19.09.2000")

    );

    @Test
    @DirtiesContext
    void getIssues() {

        String username = "davidebschke";
        String repositoryName = "Softwareentwickler-TaskTool";
        mockWebServer.enqueue(new MockResponse()
                .setResponseCode(200)
                .setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON)
                .setBody("""
                        [OneIssue[repositoryName=null, created_on=2022-08-30T06:50:26Z, login=null]]"""));

        List<Integer> issueNumberListOpen = Collections.singletonList(githubService.getAllIssuesFromRepository(username, repositoryName).size());
        Integer issueNumber = issueNumberListOpen.get(0);
        issueNumber = issueNumber - 1;
        List<com.example.backend.sett.githubstatus.OneIssue> response = Collections.singletonList(githubService.getAllIssuesFromRepository(username, repositoryName).get(issueNumber));

        assertThat(response).hasOnlyElementsOfType(OneIssue.class);
    }

    @Test
    @DirtiesContext
    void getRepositoryName() {

        String username = "davidebschke";
        String repositoryName = "Softwareentwickler-TaskTool";

        List<RepositoryName> response = Collections.singletonList((Collections.singletonList(githubService.getRepoName(username, repositoryName)).get(0)));

        assertThat(response).hasOnlyElementsOfType(RepositoryName.class);
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

        List<OneIssue> response = githubService.getAllIssuesFromRepository(username, repositoryName);
        assertThat(response).hasOnlyElementsOfType(OneIssue.class);
    }

    @Test
    @DirtiesContext
    void getRepositoryCreatedOn() {

        String username = "davidebschke";
        String repositoryName = "Softwareentwickler-TaskTool";

        List<RepositoryCreatedDate> response = Collections.singletonList((Collections.singletonList(githubService.getRepoCreatedOn(username, repositoryName)).get(0)));

        assertThat(response).hasOnlyElementsOfType(RepositoryCreatedDate.class);
    }

    @Test
    @DirtiesContext
    void getAllRepositoryInfos() {

        String username = "davidebschke";
        String repositoryName = "Softwareentwickler-TaskTool";
        String id = githubService.getRandomId();
        List<OneIssue> allIssues = issueList;
        RepositoryCreatedDate createdAt = githubService.getRepoCreatedOn(username, repositoryName);
        RepositoryName repositoryNamedefault = githubService.getRepoName(username, repositoryName);

        GithubRepositoryC newGithubRepo = new GithubRepositoryC(id, repositoryNamedefault, allIssues, createdAt);

        RepositoryName repositoryName1 = newGithubRepo.getProjectName();
        RepositoryCreatedDate repositoryCreatedDate = newGithubRepo.getCreated_on();
        Project project = new Project(newGithubRepo.getId(), repositoryName1.name(), newGithubRepo.getIssues(), repositoryCreatedDate.created_at());

        when(projectrepo.save(any())).thenReturn(project);

        Project actual = githubService.getAllRepositoryInfos(username, repositoryName);

        Assertions.assertEquals(actual, project);
    }

    @Test
    @DirtiesContext
    void addOneIssueTest() {

        OneIssue oneIssue = new OneIssue("1", "TestIssue", "TestStatus", "TestDatum");
        when(githubRepo.save(any())).thenReturn(oneIssue);

        OneIssue actual = githubService.addIssue(oneIssue);

        Assertions.assertEquals(actual, oneIssue);

    }
}
