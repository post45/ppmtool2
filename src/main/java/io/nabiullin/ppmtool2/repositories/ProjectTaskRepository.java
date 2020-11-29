package io.nabiullin.ppmtool2.repositories;

import io.nabiullin.ppmtool2.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {

     List<ProjectTask> findByProjectIdentifierOrderByPriority(String id);
}
