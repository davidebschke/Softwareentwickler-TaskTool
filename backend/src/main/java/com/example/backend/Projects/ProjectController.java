package com.example.backend.Projects;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stt/projects")
public class ProjectController {


    Projectservice projectservice ;

    public ProjectController(Projectservice projectservice) {
        this.projectservice = projectservice;
    }

    @GetMapping
    public List<Project> listProjects()
    {
        return projectservice.getProjects();
    }
}
