package react.fitness.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin
@Controller
public class IndexController {
	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}
}
