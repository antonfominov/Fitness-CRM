package react.fitness.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import react.fitness.entity.City;
import react.fitness.repository.CityRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/cities")
public class CityController {
	
@Autowired
private CityRepository cityRepository;	

@GetMapping
public Iterable<City> getAll(){
	return cityRepository.findAll();
}

@PostMapping
public ResponseEntity<Object> createCity(@RequestBody City city){
    City savedCity = cityRepository.save(city);
    return ResponseEntity.ok(savedCity);
}
	
@DeleteMapping
public Boolean delete(@RequestParam Integer id){
	try {
		cityRepository.deleteById(id);
		return true;
	} catch (NullPointerException e) {
		return false;
	}
}

}
