package com.example.backend.sett.githubstatus;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

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
    public List<OneIssue> getAllCloseIssuesFromRepository(String userName, String repositoryName) {

        WebClient webClient= WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri(pieceUri + userName + "/" + repositoryName + "/" + "issues?state=closed&per_page=100")
                .retrieve()
                .toEntityList(OneIssue.class).block()).getBody();
    }

    public List<OneRepository> getAllRepositoryInfos(String userName, String repositoryName){

        WebClient webClient= WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri(pieceUri + userName + "/" + repositoryName)
                .retrieve()
                .toEntityList(OneRepository.class).block()).getBody();
    }
}
