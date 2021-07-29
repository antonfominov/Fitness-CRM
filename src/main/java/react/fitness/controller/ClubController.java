package react.fitness.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import react.fitness.entity.Club;
import react.fitness.repository.ClubRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/clubs")
public class ClubController {
	
@Autowired
private ClubRepository clubRepository;

@GetMapping
public Iterable<Club> getAll(){
	return clubRepository.findAll();
}

@PostMapping
public ResponseEntity<Object> createClub(@RequestBody Club club){
    Club savedClub = clubRepository.save(club);
    return ResponseEntity.ok(savedClub);
}

@PutMapping
public ResponseEntity<Object> updateClub(@RequestBody Club club) {
    Club currentClub = clubRepository.findById(club.getId()).orElseThrow(RuntimeException::new);
    currentClub.setName(club.getName());
    currentClub = clubRepository.save(club);

    return ResponseEntity.ok(currentClub);
}
	
@DeleteMapping
public Boolean delete(@RequestParam Integer id){
	try {
		clubRepository.deleteById(id);
		return true;
	} catch (NullPointerException e) {
		return false;
	}
}

}
