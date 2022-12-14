package com.example.backend.sett.projects;

import com.example.backend.sett.githubstatus.OneIssue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Project {

    @Id
    @NotNull
    String id;
    @NotNull
    String projectName;
    @NotNull
    List<OneIssue> issues;
    @NotNull
    String created_on;

}
