package com.example.backend.sett.projects;

import com.example.backend.sett.githubstatus.OneIssue;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@Builder
public class NewProject {

    @NotNull
    String projectName;

    List<OneIssue> issues;
    String created_on;
}
