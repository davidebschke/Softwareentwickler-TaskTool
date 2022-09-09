package com.example.backend.sett.githubstatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GithubRepositoryC {
    @Id
    @NotNull
    String id;
    @NotNull
    RepositoryName projectName;
    @NotNull
    List<OneIssue> issues;
    @NotNull
    RepositoryCreatedDate created_at;
}
