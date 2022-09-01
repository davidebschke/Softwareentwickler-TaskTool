package com.example.backend.Projects;

import com.example.backend.Projects.githubStatus.GithubService;
import com.example.backend.Projects.githubStatus.OneIssue;
import com.example.backend.Projects.githubStatus.Repository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stt/projects")
public class ProjectController {

    private final Projectservice projectservice;
    private final GithubService githubService;

    public ProjectController(Projectservice projectservice, GithubService githubService) {
        this.projectservice = projectservice;
        this.githubService = githubService;
    }

    @GetMapping
    public List<Project> listProjects() {
        return projectservice.getProjects();
    }

    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED)
    public Project addProject(@RequestBody NewProject newProject) {

        return projectservice.addProject(newProject);
    }

    @DeleteMapping
    public void deleteProject(@RequestBody List<String> idList) {
         projectservice.deleteProject(idList);
    }

    @PutMapping
    @ResponseStatus(code = HttpStatus.OK)
    public Project updateProject( @RequestBody Project project) {
        return projectservice.updateProject(project);
    }
    @GetMapping("/{username}/{repositoryName}")
    public List<OneIssue> getAllIssues(@PathVariable String username, @PathVariable String repositoryName) {
        return githubService.getAllIssuesFromRepository(username, repositoryName);
    }

    @GetMapping("/{username}/{repositoryName}")
    public List<Repository> getAllRepositoryInfos(@PathVariable String username, @PathVariable String repositoryName) {
        return githubService.getAllRepositoryInfos(username, repositoryName);
    }
}
