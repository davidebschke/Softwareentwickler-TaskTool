package com.example.backend.Projects;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
public class Projectservice {

    Projectrepo projectrepo;

    public Projectservice(Projectrepo projectrepo) {
        this.projectrepo = projectrepo;
    }

    public List<Project> getProjects()
    {
        return projectrepo.findAll();

    }

    public String getRandomId() {
        return UUID.randomUUID().toString();
    }
}
