package Projects;

import lombok.Builder;
import javax.validation.constraints.NotNull;

@Builder
public class Project {

    @NotNull
    Integer ProjektNummer;

    @NotNull
    String ProjektName;

    @NotNull
    String Status;

    @NotNull
    String ProjektMember;
}
