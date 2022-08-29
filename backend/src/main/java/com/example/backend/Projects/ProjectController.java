package com.example.backend.Projects;

import com.example.backend.Projects.GithubStatus.GithubService;
import com.example.backend.Projects.GithubStatus.Issue;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/issues")
    public List<Issue> getAllIssues() {
        return githubService.getAllIssues();
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable String id) {
        boolean deleteSuccess = projectservice.deleteProject(id);
        return new ResponseEntity<>(deleteSuccess ? HttpStatus.NO_CONTENT : HttpStatus.NOT_FOUND);

    }

    @PutMapping("/{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public Project updateProject(@PathVariable String id, @RequestBody Project project) {
        return projectservice.updateProject(project);
    }
}
