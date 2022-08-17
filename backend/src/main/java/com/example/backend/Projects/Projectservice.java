package com.example.backend.Projects;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class Projectservice {

    Project project1= new Project(1234, "Pizzahut","In Progress","David");
    Projectrepo projectrepo;

    public Projectservice(Projectrepo projectrepo) {
        this.projectrepo = projectrepo;
    }

    public List<Project> getProjects()
    {
        return projectrepo.findAll();

    }
}
