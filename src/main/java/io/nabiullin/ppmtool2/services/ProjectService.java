package io.nabiullin.ppmtool2.services;

import io.nabiullin.ppmtool2.domain.Project;
import io.nabiullin.ppmtool2.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){

        return projectRepository.save(project);
    }
}
