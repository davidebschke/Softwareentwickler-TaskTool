package com.example.backend.sett.githubstatus;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class GithubService {

    String pieceUri = "https://api.github.com/repos/";

    public List<OneIssue> getAllOpenIssuesFromRepository(String userName, String repositoryName) {

        WebClient webClient = WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri(pieceUri + userName + "/" + repositoryName + "/" + "issues?state=open&per_page=100")
                .retrieve()
                .toEntityList(OneIssue.class).block()).getBody();
    }

    public List<RepositoryCreatedDate> getRepoCreatedAt(String userName, String repositoryName) {

        WebClient webClient = WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri(pieceUri + userName + "/" + repositoryName)
                .retrieve()
                .toEntityList(RepositoryCreatedDate.class).block()).getBody();
    }

    public List<OneIssue> getAllCloseIssuesFromRepository(String userName, String repositoryName) {

        WebClient webClient = WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri(pieceUri + userName + "/" + repositoryName + "/" + "issues?state=closed&per_page=100")
                .retrieve()
                .toEntityList(OneIssue.class).block()).getBody();
    }

    public List<RepositoryName> getRepoName(String userName, String repositoryName) {

        WebClient webClient = WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri(pieceUri + userName + "/" + repositoryName)
                .retrieve()
                .toEntityList(RepositoryName.class).block()).getBody();
    }


    public List<GithubRepositoryC> getAllRepositoryInfos(String userName, String repositoryName) {

        List<OneIssue> closedIssues = getAllCloseIssuesFromRepository(userName, repositoryName);
        List<OneIssue> openIssues = getAllOpenIssuesFromRepository(userName, repositoryName);
        List<RepositoryCreatedDate> createdAt = getRepoCreatedAt(userName, repositoryName);
        List<RepositoryName> repoName = getRepoName(userName, repositoryName);

        List<GithubRepositoryC> repoInfos = new ArrayList<>();
        repoInfos.add((GithubRepositoryC) closedIssues);
        repoInfos.add((GithubRepositoryC) openIssues);
        repoInfos.add((GithubRepositoryC) repoName);
        repoInfos.add((GithubRepositoryC) createdAt);

        return repoInfos;
    }
}
