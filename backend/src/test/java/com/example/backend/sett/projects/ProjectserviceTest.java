package com.example.backend.sett.projects;

import com.example.backend.sett.projects.NewProject;
import com.example.backend.sett.projects.Project;
import com.example.backend.sett.projects.Projectrepo;
import com.example.backend.sett.projects.Projectservice;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class ProjectserviceTest {

    List<Project> projectList = List.of(

            new Project("0", "Jacke", "David",  "2022-11-09"),
            new Project("0", "Kakao", "Jan",  "2022-09-11"),
            new Project("0", "Shop", "Michael", "2022-09-11")
    );

    private final Projectrepo projectrepo = mock(Projectrepo.class);
    private final Projectservice projectservice = new Projectservice(projectrepo);
    private final Project project = new Project("Test", "Shop", "David",  "2022-09-09");

    @Test
    void getProjects() {

        when(projectrepo.findAll()).thenReturn(projectList);
        List<Project> actual = projectservice.getProjects();
        Assertions.assertArrayEquals(projectList.toArray(), actual.toArray());
    }

    @Test
    void addProjectTest() {
        // given
        when(projectrepo.save(any())).thenReturn(project);
        //when
        Project actual = projectservice.addProject(new NewProject(
                project.projectName,
                project.creator,
                project.createdAt));

        Assertions.assertEquals(actual, project);
    }

    @Test
    void deleteProjectTest() {
        Project project = new Project("1", "shop", "David", "2022-09-09");

        List<String> ids = List.of("1");
        when(projectrepo.existsById(project.id)).thenReturn(true);
        doNothing().when(projectrepo).deleteById(project.id);

        projectservice.deleteProject(ids);
        verify(projectrepo).deleteById(project.id);
    }

    @Test
    void updateProjectTest() {
        Project project = new Project("TestID", "Shop", "David", "2022-09-09");

        when(projectrepo.save(any(Project.class))).thenReturn(project);
        Project actual = projectservice.updateProject(project);
        Assertions.assertEquals(project, actual);
    }
}
