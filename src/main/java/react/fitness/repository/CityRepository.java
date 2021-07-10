package react.fitness.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import react.fitness.entity.City;

@Repository
public interface CityRepository extends CrudRepository<City, Integer> {
}
