package com.example.backend.Projects;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class Projectservice {

    Projectrepo projectrepo;

    public List<Project> getProjects() {
        return projectrepo.findAll();

    }

    public String getRandomId() {
        return UUID.randomUUID().toString();
    }

    public Project addProject(NewProject newProject) {
        return projectrepo.save(
                new Project(
                        getRandomId(),
                        newProject.projectNumber,
                        newProject.projectName,
                        newProject.status,
                        newProject.projectMember
                ));
    }

    public boolean deleteProject(String id) {

        if(projectrepo.existsById(String.valueOf(id)))
        {
            projectrepo.deleteById(String.valueOf(id));
            return true;
        }
        return false;
    }

    public Project updateProject(Project project) {
        return projectrepo.save(new Project(project.id,project.projectNumber, project.projectName, project.status, project.projectMember));
    }
}
