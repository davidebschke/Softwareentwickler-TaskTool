package com.example.backend.sett.githubstatus;

import com.example.backend.sett.projects.Project;
import com.example.backend.sett.projects.Projectrepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class GithubService {

    private final Projectrepo projectrepo;

    String pieceUri = "https://api.github.com/repos/";

    public RepositoryCreatedDate getRepoCreatedAt(String userName, String repositoryName) {

        WebClient webClient = WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri(pieceUri + userName + "/" + repositoryName)
                .retrieve()
                .toEntity(RepositoryCreatedDate.class).block()).getBody();
    }

    public List<OneIssue> getAllIssuesFromRepository(String userName, String repositoryName) {

        WebClient webClient = WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri(pieceUri + userName + "/" + repositoryName + "/" + "issues?state=all&per_page=100")
                .retrieve()
                .toEntityList(OneIssue.class).block()).getBody();
    }

    public RepositoryName getRepoName(String userName, String repositoryName) {

        WebClient webClient = WebClient.create();

        return Objects.requireNonNull(webClient
                .get()
                .uri(pieceUri + userName + "/" + repositoryName)
                .retrieve()
                .toEntity(RepositoryName.class).block()).getBody();
    }

    public String getRandomId() {
        return UUID.randomUUID().toString();
    }

    public Project getAllRepositoryInfos(String userName, String repositoryName) {

        List<OneIssue> allIssues = getAllIssuesFromRepository(userName, repositoryName);
        RepositoryCreatedDate createdAt = getRepoCreatedAt(userName, repositoryName);
        RepositoryName repoName = getRepoName(userName, repositoryName);
        String id = getRandomId();

        GithubRepositoryC newGithubRepo = new GithubRepositoryC(id, repoName, allIssues, createdAt);

        RepositoryName repositoryName1 = newGithubRepo.projectName;
        RepositoryCreatedDate repositoryCreatedDate = newGithubRepo.created_at;


        return projectrepo.save(new Project(newGithubRepo.id, repositoryName1.name(), newGithubRepo.issues, repositoryCreatedDate.created_at()));
    }
}
