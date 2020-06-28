package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.BepService;

import com.example.demo.model.Bep;
import com.example.demo.model.BepID;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class ChefController {

    // @Autowired
    // BepService repositoryBep;
    
    // @RequestMapping(path = "/getAllBep", method = RequestMethod.GET)
	// public List<Bep> getAllBep(){
	// 	return repositoryBep.findAll();
	// }
	
	// @RequestMapping(path = "/getAllBepByIDBep/{bepID}", method = RequestMethod.GET)
	// public List<Bep> getAllBepByIDBep(@PathVariable(value = "bepID") int bepID){
	// 	return repositoryBep.getBepByBep_ID(bepID);
	// }
	
	// @RequestMapping(path = "/insertToBep/{bepID}&{hoadonID}", method = RequestMethod.POST)
	// public Bep insertToBep(@PathVariable(value = "bepID") int bepID, @PathVariable(value = "hoadonID") int hoadonID){
	// 	return repositoryBep.save(new Bep(new BepID(bepID, hoadonID),0));
	// }
	
	// @RequestMapping(path = "/deleteFromBep/{bepID}&{hoadonID}", method = RequestMethod.POST)
	// public boolean deleteFromBep(@PathVariable(value = "bepID") int bepID, @PathVariable(value = "hoadonID") int hoadonID){
	// 	repositoryBep.deleteById(new BepID(bepID, hoadonID));
	// 	return true;
	// }
}