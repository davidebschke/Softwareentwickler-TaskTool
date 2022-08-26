package com.example.backend.Projects.GithubStatus;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class GithubService {

    public List<Issue> getAllIssues() {

        WebClient webClient = WebClient.create();

        return Objects.requireNonNull(webClient.get().uri("https://api.github.com/repos/davidebschke/Softwareentwickler-TaskTool/issues?state=all&per_page=100")
                .retrieve()
                .toEntityList(Issue.class).block()).getBody();
    }
}
