package com.example.backend.sett.projects;

import com.example.backend.sett.githubstatus.OneIssue;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class ProjectserviceTest {

    List<OneIssue> issueList = List.of(

            new OneIssue("1", "Hallo Welt Issue", "open", "19.09.2000")

    );

    List<Project> projectList = List.of(

            new Project("0", "Jacke", issueList, "2022-11-09"),
            new Project("0", "Kakao", issueList, "2022-09-11"),
            new Project("0", "Shop", issueList, "2022-09-11")
    );

    private final Projectrepo projectrepo = mock(Projectrepo.class);
    private final Projectservice projectservice = new Projectservice(projectrepo);
    private final Project project = new Project("Test", "Shop", issueList, "2022-09-09");

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
                project.issues,
                project.created_on));

        Assertions.assertEquals(actual, project);
    }

    @Test
    void deleteProjectTest() {
        Project project = new Project("1", "shop", issueList, "2022-09-09");

        List<String> ids = List.of("1");
        when(projectrepo.existsById(project.id)).thenReturn(true);
        doNothing().when(projectrepo).deleteById(project.id);

        projectservice.deleteProject(ids);
        verify(projectrepo).deleteById(project.id);
    }

    @Test
    void updateProjectTest() {
        Project project = new Project("TestID", "Shop", issueList, "2022-09-09");

        when(projectrepo.save(any(Project.class))).thenReturn(project);
        Project actual = projectservice.updateProject(project);
        Assertions.assertEquals(project, actual);
    }
}
