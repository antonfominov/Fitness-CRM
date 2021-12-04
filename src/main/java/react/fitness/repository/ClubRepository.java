package react.fitness.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import react.fitness.entity.Club;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {
}
