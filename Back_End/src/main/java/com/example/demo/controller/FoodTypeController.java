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
	public ResponseEntity<List<LoaiMonAn>> listAllLoaiMonAn() {
		List<LoaiMonAn> listLoaiMonAn = repositoryLoaiMonAn.findAll();
		if (listLoaiMonAn.isEmpty()) {
			return new ResponseEntity<List<LoaiMonAn>>(HttpStatus.NO_CONTENT);
		}
		// return ResponseEntity<List<Contact>>(listContact, HttpStatus.OK);
		return new ResponseEntity<List<LoaiMonAn>>(listLoaiMonAn, HttpStatus.OK);
	}

	// LAY 1 LOAI MON AN
	@RequestMapping(value = "/LoaiMonAn/{id}", method = RequestMethod.GET)
	public LoaiMonAn findLoaiMonAnByID(@PathVariable("id") long id) {
		LoaiMonAn loaimonan = repositoryLoaiMonAn.getOne(id);
		if (loaimonan == null) {
			ResponseEntity.notFound().build();
		}

		return loaimonan;
	}

	// THEM LOAI MON AN
	@RequestMapping(value = "/InsertLoaiMonAn", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_ATOM_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	@ResponseBody
	public LoaiMonAn insertLoaiMonAn(@Valid LoaiMonAn loaimonanForm) {
		// @Valid: kiem tra xem co ton tai object trong body
		LoaiMonAn lma = repositoryLoaiMonAn.save(loaimonanForm);
		return lma;
	}

	// CAP NHAT LOAI MON AN
	@RequestMapping(value = "/UpdateLoaiMonAn", method = RequestMethod.POST)
	public ResponseEntity<LoaiMonAn> updateLoaiMonAn(@Valid @RequestBody LoaiMonAn loaimonanForm) {
		LoaiMonAn lma = repositoryLoaiMonAn.getOne(loaimonanForm.getId());
		if (lma == null) {
			return ResponseEntity.notFound().build();
		}

		lma.setName(loaimonanForm.getName());
		lma.setDescription(loaimonanForm.getDescription());

		LoaiMonAn updatedLoaiMonAn = repositoryLoaiMonAn.save(lma);// update trong database
		return ResponseEntity.ok(updatedLoaiMonAn);
	}

	// XOA LOAI MON AN
	@RequestMapping(value = "/DeleteLoaiMonAn", method = RequestMethod.POST)
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