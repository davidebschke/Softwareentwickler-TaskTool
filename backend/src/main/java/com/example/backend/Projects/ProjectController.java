package com.example.backend.Projects;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stt/projects")
public class ProjectController {

    private final Projectservice projectservice ;

    public ProjectController(Projectservice projectservice) {
        this.projectservice = projectservice;
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

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteProject (@PathVariable String id)
    {
        boolean deleteSuccess= projectservice.deleteProject(id);
        return new ResponseEntity<>(deleteSuccess ? HttpStatus.NO_CONTENT : HttpStatus.NOT_FOUND);

    }
}
