package com.example.demo.controller;

import javax.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;

import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.LoaiMonAnService;

import com.example.demo.model.LoaiMonAn;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class FoodTypeController {
	@Autowired
	LoaiMonAnService repositoryLoaiMonAn;

    // LAY ALL LOAI MON AN
	@RequestMapping(value = "/GetAllLoaiMonAn", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public ResponseEntity<List<LoaiMonAn>> listAllLoaiMonAn() {
		List<LoaiMonAn> listLoaiMonAn = repositoryLoaiMonAn.findAll();
		if (listLoaiMonAn.isEmpty()) {
			return new ResponseEntity<List<LoaiMonAn>>(HttpStatus.NO_CONTENT);
		}
		// return ResponseEntity<List<Contact>>(listContact, HttpStatus.OK);
		return new ResponseEntity<List<LoaiMonAn>>(listLoaiMonAn, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/GetAllByStatus/{status}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public ResponseEntity<List<LoaiMonAn>> listTypeFoodByStatus(@PathVariable("status") int status) {
		List<LoaiMonAn> listLoaiMonAn = repositoryLoaiMonAn.listTypeFoodByStatus(status);
		if (listLoaiMonAn.isEmpty()) {
			return new ResponseEntity<List<LoaiMonAn>>(HttpStatus.NO_CONTENT);
		}
		// return ResponseEntity<List<Contact>>(listContact, HttpStatus.OK);
		return new ResponseEntity<List<LoaiMonAn>>(listLoaiMonAn, HttpStatus.OK);
	}

	// LAY 1 LOAI MON AN
	@RequestMapping(value = "/LoaiMonAn/{id}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public LoaiMonAn findLoaiMonAnByID(@PathVariable("id") long id) {
		LoaiMonAn loaimonan = repositoryLoaiMonAn.getOne(id);
		if (loaimonan == null) {
			ResponseEntity.notFound().build();
		}

		return loaimonan;
	}

	// THEM LOAI MON AN
	@RequestMapping(value = "/InsertLoaiMonAn", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	@ResponseBody
	public LoaiMonAn insertLoaiMonAn(@Valid @RequestBody LoaiMonAn loaimonanForm) {
		// @Valid: kiem tra xem co ton tai object trong body
		LoaiMonAn lma = repositoryLoaiMonAn.save(loaimonanForm);
		return lma;
	}

	// CAP NHAT LOAI MON AN
	@RequestMapping(value = "/UpdateLoaiMonAn", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public ResponseEntity<LoaiMonAn> updateLoaiMonAn(@Valid @RequestBody LoaiMonAn loaimonanForm) {
		LoaiMonAn lma = repositoryLoaiMonAn.getOne(loaimonanForm.getId());
		if (lma == null) {
			return ResponseEntity.notFound().build();
		}

		lma.setName(loaimonanForm.getName());
		lma.setDescription(loaimonanForm.getDescription());
		lma.setIsActive(loaimonanForm.getIsActive());

		LoaiMonAn updatedLoaiMonAn = repositoryLoaiMonAn.save(lma);// update trong database
		return ResponseEntity.ok(updatedLoaiMonAn);
	}

	// XOA LOAI MON AN
	@RequestMapping(value = "/DeleteLoaiMonAn", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public int deleteLoaiMonAn(@Valid @RequestBody LoaiMonAn loaimonan) {
		// @PathVariable(value=""): lay bien tu url
		// @RequestBody: lay object duoc gui trong body
		LoaiMonAn lma = repositoryLoaiMonAn.getOne(loaimonan.getId());
		if (lma == null) {
			return 0;
		}
		repositoryLoaiMonAn.delete(lma);// delete trong database
		return 1;
	}
}