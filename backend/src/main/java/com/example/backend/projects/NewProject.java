package com.example.backend.projects;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@Builder
public class NewProject {

    @NotNull
    String projectName;

    String creator;
    String createdAt;
}
