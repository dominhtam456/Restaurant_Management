package com.example.demo.controller;

import javax.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import com.example.demo.service.NguyenLieuService;
import com.example.demo.service.LoaiNguyenLieuService;


import com.example.demo.model.LoaiNguyenLieu;
import com.example.demo.model.NguyenLieu;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MaterialTypeController {

    @Autowired
	LoaiNguyenLieuService repositoryLoaiNguyenLieu;
	
	@Autowired
    NguyenLieuService repositoryNguyenLieu;

    // LAY ALL LOAI NGUYEN LIEU
	@RequestMapping(value = "/GetAllLoaiNguyenLieu", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public ResponseEntity<List<LoaiNguyenLieu>> listAllLoaiNguyenLieu() {
		List<LoaiNguyenLieu> listLoaiNguyenLieu = repositoryLoaiNguyenLieu.findAll();
		if (listLoaiNguyenLieu.isEmpty()) {
			return new ResponseEntity<List<LoaiNguyenLieu>>(HttpStatus.NO_CONTENT);
		}
		// return ResponseEntity<List<Contact>>(listContact, HttpStatus.OK);
		return new ResponseEntity<List<LoaiNguyenLieu>>(listLoaiNguyenLieu, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/GetAllMByStatus/{status}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public ResponseEntity<List<LoaiNguyenLieu>> listAllByStatus(@PathVariable("status") int status) {
		List<LoaiNguyenLieu> listLoaiNguyenLieu = repositoryLoaiNguyenLieu.listAllByStatus(status);
		if (listLoaiNguyenLieu.isEmpty()) {
			return new ResponseEntity<List<LoaiNguyenLieu>>(HttpStatus.NO_CONTENT);
		}
		// return ResponseEntity<List<Contact>>(listContact, HttpStatus.OK);
		return new ResponseEntity<List<LoaiNguyenLieu>>(listLoaiNguyenLieu, HttpStatus.OK);
	}

	// LAY 1 LOAI NGUYEN LIEU
	@RequestMapping(value = "/LoaiNguyenLieu/{id}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public LoaiNguyenLieu findLoaiNguyenLieuByID(@PathVariable("id") long id) {
		LoaiNguyenLieu loainguyenlieu = repositoryLoaiNguyenLieu.getOne(id);
		if (loainguyenlieu == null) {
			ResponseEntity.notFound().build();
		}

		return loainguyenlieu;
	}

	// THEM LOAI NGUYEN LIEU
	@RequestMapping(value = "/InsertLoaiNguyenLieu", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	@ResponseBody
	public LoaiNguyenLieu insertLoaiNguyenLieu(@Valid @RequestBody LoaiNguyenLieu loainguyenlieuForm) {
		// @Valid: kiem tra xem co ton tai object trong body
		LoaiNguyenLieu lnl = repositoryLoaiNguyenLieu.save(loainguyenlieuForm);
		return lnl;
	}

	// CAP NHAT LOAI NGUYEN LIEU
	@RequestMapping(value = "/UpdateLoaiNguyenLieu", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public ResponseEntity<LoaiNguyenLieu> updateLoaiNguyenLieu(@Valid @RequestBody LoaiNguyenLieu loainguyenlieuForm) {
		LoaiNguyenLieu lnl = repositoryLoaiNguyenLieu.getOne(loainguyenlieuForm.getId());
		if (lnl == null) {
			return ResponseEntity.notFound().build();
		}

		lnl.setName(loainguyenlieuForm.getName());
		lnl.setUnit(loainguyenlieuForm.getUnit());
		lnl.setIsActive(loainguyenlieuForm.getIsActive());

		LoaiNguyenLieu updatedLoaiNguyenLieu = repositoryLoaiNguyenLieu.save(lnl);// update trong database
		return ResponseEntity.ok(updatedLoaiNguyenLieu);
	}

	// XOA LOAI NGUYEN LIEU
	@RequestMapping(value = "/DeleteLoaiNguyenLieu", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public int deleteLoaiNguyenLieu(@Valid @RequestBody LoaiNguyenLieu loainguyenlieu) {
		// @PathVariable(value=""): lay bien tu url
		// @RequestBody: lay object duoc gui trong body
		LoaiNguyenLieu lnl = repositoryLoaiNguyenLieu.getOne(loainguyenlieu.getId());
		if (lnl == null) {
			return 0;
		}
		repositoryLoaiNguyenLieu.delete(lnl);// delete trong database
		return 1;
	}
	
	// LOC LOAI NGUYEN LIEU THEO HIEN TRANG
	@RequestMapping(path = "/filterTypeRes", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	@ResponseBody
	public List<LoaiNguyenLieu> filterLNL (@RequestParam(value = "is_active", required = false) List<String> isActive){
		// This returns a JSON or XML with the users 
		if(isActive.size() == 0) {
			return repositoryLoaiNguyenLieu.findAll();
		}
		return repositoryLoaiNguyenLieu.filterLNL(isActive);
	}

}