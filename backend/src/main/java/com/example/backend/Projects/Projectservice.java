package com.example.backend.Projects;

import com.example.backend.Projects.GithubStatus.OneIssue;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class Projectservice {

    Projectrepo projectrepo;

    public List<Project> getProjects() {
       return  projectrepo.findAll();
    }

    public String getRandomId() {
        return UUID.randomUUID().toString();
    }

    public Project addProject(NewProject newProject) {
        return projectrepo.save(
                new Project(
                        getRandomId(),
                        newProject.projectName,
                        newProject.creator,
                        newProject.created_at
                ));
    }

    public void deleteProject  ( List<String> ids) {
        ids.forEach(id -> {
            if (projectrepo.existsById(String.valueOf(id))) {
                projectrepo.deleteById(String.valueOf(id));
            }
        });
    }

    public Project updateProject(Project project) {
        return projectrepo.save(new Project(project.id, project.projectName, project.creator, project.created_at));
    }
}
