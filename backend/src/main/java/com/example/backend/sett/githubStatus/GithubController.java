package com.example.backend.sett.githubStatus;


import com.example.backend.sett.projects.Projectservice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stt/github")
public class GithubController {

    private final GithubService githubService;

    public GithubController(GithubService githubService) {
        this.githubService = githubService;
    }


    @GetMapping("/issuesC/{username}/{repositoryName}")
    public List<OneIssue> getAllCloseIssues(@PathVariable String username, @PathVariable String repositoryName) {
        return githubService.getAllCloseIssuesFromRepository(username, repositoryName);
    }
    @GetMapping("/issuesO/{username}/{repositoryName}")
    public List<OneIssue> getAllOpenIssues(@PathVariable String username, @PathVariable String repositoryName) {
        return githubService.getAllOpenIssuesFromRepository(username, repositoryName);
    }

    @GetMapping("/{username}/{repositoryName}")
    public List<OneRepository> getAllRepositoryInfos(@PathVariable String username, @PathVariable String repositoryName) {
        return githubService.getAllRepositoryInfos(username, repositoryName);
    }
}
