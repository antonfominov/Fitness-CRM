package react.fitness.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import react.fitness.entity.City;
import react.fitness.entity.Club;
import react.fitness.repository.CityRepository;
import react.fitness.repository.ClubRepository;

import java.util.Optional;


@CrossOrigin
@RestController
@RequestMapping("/api/clubs")
public class ClubController {

@Autowired
private ClubRepository clubRepository;
@Autowired
private CityRepository cityRepository;

@GetMapping
public Iterable<Club> getAll(){
	return clubRepository.findAll();
}

@GetMapping(value = "/{id}")
public ResponseEntity<Object> getSingle(@PathVariable Long id){
	Club result = clubRepository.findById(id).orElseThrow(RuntimeException::new);
	return ResponseEntity.ok(result);
	}

@PostMapping
public ResponseEntity<Object> createClub(@RequestBody Club club){
	City city = cityRepository.findById(club.getCityId()).orElseThrow(RuntimeException::new);
	club.setCityName(city.getName());
    Club savedClub = clubRepository.save(club);
    return ResponseEntity.ok(savedClub);
}

@PutMapping
public ResponseEntity<Object> updateClub(@RequestBody Club club) {
	Club currentClub = clubRepository.findById(club.getId()).orElseThrow(RuntimeException::new);
	City city = cityRepository.findById(club.getCityId()).orElseThrow(RuntimeException::new);

	System.out.println(city.getName());

	currentClub.setName(club.getName());
	currentClub.setCityName(city.getName());
	System.out.println(currentClub.getCityId());
	System.out.println(currentClub.getCityName());
	currentClub = clubRepository.save(currentClub);

    return ResponseEntity.ok(currentClub);
}
	
@DeleteMapping
public Boolean delete(@RequestParam Long id){
	try {
		clubRepository.deleteById(id);
		return true;
	} catch (NullPointerException e) {
		return false;
	}
}

}
