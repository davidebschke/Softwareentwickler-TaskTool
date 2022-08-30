package com.example.backend.Projects;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Builder
public class NewProject {

    @NotNull
    String projectName;

    String creator;
    String created_at;
}
