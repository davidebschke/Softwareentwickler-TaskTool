package com.example.backend.Projects;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class Projectservice {

    Projectrepo projectrepo;


    public List<Project> getProjects()
    {
        return projectrepo.findAll();

    }

    public String getRandomId() {
        return UUID.randomUUID().toString();
    }
}
