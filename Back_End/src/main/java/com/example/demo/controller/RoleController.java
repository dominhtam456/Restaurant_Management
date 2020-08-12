package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ChucVu;
import com.example.demo.service.ChucVuService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class RoleController {
	@Autowired
	ChucVuService repositoryChucVu;
	
	//Lay all chuc vu
	@GetMapping("/GetAllRole")
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public java.util.List<ChucVu> GetAllRole() {
		// This returns a JSON or XML with the users
		return repositoryChucVu.GetAllRole();
	}
}
