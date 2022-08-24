package com.example.backend.Projects;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class ProjectserviceTest {

    List<Project> projectList = List.of(

            new Project("0", 2000, "Shop", Status.Done, "David"),
            new Project("0", 2001, "Shop", Status.Done, "David"),
            new Project("0", 2002, "Shop", Status.Done, "David")
    );

    private final Projectrepo projectrepo = mock(Projectrepo.class);
    private final Projectservice projectservice = new Projectservice(projectrepo);
    private final Project project = new Project("Test", 1995, "Shop", Status.Done, "David");

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
                project.projectNumber,
                project.projectName,
                project.status,
                project.projectMember));

        Assertions.assertEquals(actual, project);
    }

    @Test
    void deleteProjectTest() {
        Project project = new Project("", 9, "Shop", Status.Done, "David");

        when(projectrepo.existsById(project.id)).thenReturn(true);
        doNothing().when(projectrepo).deleteById(project.id);

        projectservice.deleteProject(project.id);
        verify(projectrepo).deleteById(project.id);
    }

    @Test
    void updateProjectTest() {
        Project project = new Project("TestID", 9, "Shop", Status.In_Progress, "David");

        when(projectrepo.save(any(Project.class))).thenReturn(project);
        Project actual = projectservice.updateProject(project);
        Assertions.assertEquals(project, actual);
    }
}
