package Projects;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
@Builder
public class Project {

    @NotNull
    Integer projectNumber;
    @NotNull
    String projectName;
    @NotNull
    String status;
    @NotNull
    String projectMember;
}
