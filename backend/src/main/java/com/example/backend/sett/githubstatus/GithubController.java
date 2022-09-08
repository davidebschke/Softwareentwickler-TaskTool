package com.example.backend.sett.githubstatus;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stt/github")
public class GithubController {

    private final GithubService githubService;

    public GithubController(GithubService githubService) {
        this.githubService = githubService;
    }

    @PostMapping("/{username}/{repositoryName}")
    public GithubRepositoryC getAllRepositoryInfos(@PathVariable String username, @PathVariable String repositoryName) {

        return githubService.getAllRepositoryInfos(username, repositoryName);
    }
}
