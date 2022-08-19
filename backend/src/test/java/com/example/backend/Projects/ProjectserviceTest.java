package com.example.backend.Projects;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ProjectserviceTest {

    List<Project> projectList= List.of(

            new Project("0",2000,"Shop","Done","David"),
            new Project("0",2001,"Shop","Done","David"),
            new Project("0",2002,"Shop","Done","David")
            );

    private final Projectrepo projectrepo=mock(Projectrepo.class);
    private final Projectservice projectservice= new Projectservice(projectrepo);
    private final Project project = new Project("Test", 1995, "Shop", "Done", "David");

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
        Project actual = projectservice.addProject(new NewProject(project.projectNumber, project.projectName, project.status, project.projectMember));
        Assertions.assertEquals(project, project);
    }

}