package react.fitness.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import react.fitness.entity.Club;

@Repository
public interface ClubRepository extends CrudRepository<Club, Integer> {
}
