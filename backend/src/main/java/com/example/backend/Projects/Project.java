package com.example.backend.Projects;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;

@Data
@Builder
public class Project {

    @Id
    @NotNull
    String id;
    @NotNull
    Integer projectNumber;
    @NotNull
    String projectName;
    @NotNull
    String status;
    @NotNull
    String projectMember;
}
