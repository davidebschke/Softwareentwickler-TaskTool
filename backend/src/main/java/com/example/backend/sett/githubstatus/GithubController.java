package com.example.backend.sett.githubstatus;

import com.example.backend.sett.projects.Project;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stt/github")
public class GithubController {

    private final GithubService githubService;

    public GithubController(GithubService githubService) {
        this.githubService = githubService;
    }

    @PostMapping("/{username}/{repositoryName}")
    public Project getAllRepositoryInfos(@PathVariable String username, @PathVariable String repositoryName) {
        return githubService.getAllRepositoryInfos(username, repositoryName);
    }
}
