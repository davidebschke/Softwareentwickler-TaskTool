package Projects;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProjectTest {

    @Test
    void builder() {

       Project actual= Project.builder()
                .projectName("Shop")
                .projectMember("David")
                .status("In Progress")
                .projectNummer(1234).build();

        System.out.println(actual);

        Project expected=new Project(1234,"Shop","In Progress","David");


        assertEquals(actual,expected);
    }
}