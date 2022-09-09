package com.example.backend.sett.projects;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@Builder
public class NewProject {

    @NotNull
    String projectName;

    String creator;
    String created_at;
}
