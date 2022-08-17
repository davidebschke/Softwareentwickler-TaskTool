package Projects;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/STT")
public class ProjectController {


    Projectservice projectservice ;

    @GetMapping("/Projects")
    public List<Project> listProjects()
    {
        return projectservice.getProjects();
    }
}
