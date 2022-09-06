package com.example.backend.sett.projects;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stt/projects")
public class ProjectController {

    private final Projectservice projectservice;

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

    @DeleteMapping
    public void deleteProject(@RequestBody List<String> idList) {
         projectservice.deleteProject(idList);
    }

    @PutMapping
    @ResponseStatus(code = HttpStatus.OK)
    public Project updateProject( @RequestBody Project project) {
        return projectservice.updateProject(project);
    }

}
