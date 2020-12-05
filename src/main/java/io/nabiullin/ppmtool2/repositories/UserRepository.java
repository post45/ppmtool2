package io.nabiullin.ppmtool2.repositories;

import io.nabiullin.ppmtool2.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
