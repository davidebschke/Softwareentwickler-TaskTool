package Projects;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("stt")
public class ProjectController {


    Projectservice projectservice ;

    @GetMapping("/projects")
    public List<Project> listProjects()
    {
        return projectservice.getProjects();
    }
}
