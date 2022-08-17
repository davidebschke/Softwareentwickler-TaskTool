package Projects;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class Projectservice {

    Projectrepo projectrepo;
    public List<Project> getProjects()
    {
        return projectrepo.findAll();
    }
}
