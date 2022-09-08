package com.example.backend.sett.githubstatus;

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

    @GetMapping("/{username}/{repositoryName}")
    public List<GithubRepositoryC> getAllRepositoryInfos(@PathVariable String username, @PathVariable String repositoryName) {

        return githubService.getAllRepositoryInfos(username, repositoryName);
    }
}
