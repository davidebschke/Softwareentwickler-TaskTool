package com.example.backend.projects;

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
    String projectName;
    @NotNull
    String creator;
    @NotNull
    String createdAt;

}
