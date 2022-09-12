package com.example.backend.sett.githubstatus;

import com.example.backend.sett.projects.Project;
import org.springframework.http.HttpStatus;
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
    public Project getAllRepositoryInfos(@PathVariable String username, @PathVariable String repositoryName) {
        return githubService.getAllRepositoryInfos(username, repositoryName);
    }

    @PostMapping("/issue")
    @ResponseStatus(code = HttpStatus.CREATED)
    public OneIssue addIssue(@RequestBody OneIssue newIssue) {
        return githubService.addIssue(newIssue);
    }

    @GetMapping("/issue")
    public List<OneIssue> listIssues() {
        return githubService.getIssues();
    }
}
