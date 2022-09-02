package com.example.backend.sett.githubStatus;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class GithubService {

    public List<OneIssue> getAllOpenIssuesFromRepository(String userName, String repositoryName) {

        WebClient webClient= WebClient.create();

         return Objects.requireNonNull(webClient
                 .get()
                 .uri("https://api.github.com/repos/"+ userName +"/"+ repositoryName + "/" + "issues?state=open&per_page=100")
                .retrieve()
                .toEntityList(OneIssue.class).block()).getBody();
    }
    public List<OneIssue> getAllCloseIssuesFromRepository(String userName, String repositoryName) {

        WebClient webClient= WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri("https://api.github.com/repos/"+ userName +"/"+ repositoryName + "/" + "issues?state=closed&per_page=100")
                .retrieve()
                .toEntityList(OneIssue.class).block()).getBody();
    }

    public List<OneRepository> getAllRepositoryInfos(String userName, String repositoryName){

        WebClient webClient= WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri("https://api.github.com/repos/"+ userName +"/"+ repositoryName)
                .retrieve()
                .toEntityList(OneRepository.class).block()).getBody();
    }
}
