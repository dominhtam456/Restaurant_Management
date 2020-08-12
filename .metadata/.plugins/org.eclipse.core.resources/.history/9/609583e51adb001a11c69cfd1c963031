package com.example.demo.controller;

import javax.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import com.example.demo.service.MonAnChiTietService;

import com.example.demo.model.MonAnChiTiet;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class FoodDetailController {
    @Autowired
    MonAnChiTietService repositoryMonAnChiTiet;
    
    // GET ALL MON AN CHI TIET
		@RequestMapping(path = "/GetAllMonAnChiTiet", produces = MediaType.APPLICATION_JSON_VALUE)
		public List<MonAnChiTiet> GetAllMonAnChiTiet() {
			
			return repositoryMonAnChiTiet.GetAllMonAnChiTiets(); 
		}
	
	// GET 1 MON AN CHI TIET
	@RequestMapping(path = "/GetMonAnChiTiet/{monanID}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public List<MonAnChiTiet> GetMonAnChiTiet(@PathVariable(value = "monanID") int monanID) {
		return repositoryMonAnChiTiet.GetMonAnChiTietByMonAnID(monanID);
	}
	
	
	// INSERT MON AN CHI TIET
	@RequestMapping(value = "/InsertMonAnChiTiet", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	@ResponseBody
	public MonAnChiTiet InserMACT(@Valid @RequestBody MonAnChiTiet mact) {

		return repositoryMonAnChiTiet.InSertMACT(mact);

	}


}