package com.example.demo.controller;

import javax.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.NguyenLieuService;
import com.example.demo.service.LoaiNguyenLieuService;
import com.example.demo.model.MonAn;
import com.example.demo.model.NguyenLieu;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MaterialController {
    @Autowired
	LoaiNguyenLieuService repositoryLoaiNguyenLieu;
	
	@Autowired
    NguyenLieuService repositoryNguyenLieu;
    
    // LAY TEN LOAI NGUYEN LIEU CHO TABLE NGUYEN LIEU THONG QUA ID LOAI NGUYEN LIEU
	public String GetTenLoaiNguyenLieu(long idLoaiNguyenLieu) {
		if (repositoryLoaiNguyenLieu.getOne(idLoaiNguyenLieu) != null) {
			return repositoryLoaiNguyenLieu.getOne(idLoaiNguyenLieu).getName();
		} else {
			return "null";
		}

	}

	// LAY ALL NGUYEN LIEU
	@RequestMapping(path = "/GetAllNguyenLieu", produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public java.util.List<NguyenLieu> getAllNguyenLieu() {
		// This returns a JSON or XML with the users
		for (NguyenLieu nguyenLieu : repositoryNguyenLieu.findAll()) {
			// Set ten loai nguyen lieu

			nguyenLieu.setTenloainguyenlieu(GetTenLoaiNguyenLieu(nguyenLieu.getLoainguyenlieu_id()));
		}
		return repositoryNguyenLieu.findAll();
	}

	// LAY 1 NGUYEN LIEU
	@RequestMapping(value = "/NguyenLieu/{id}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public NguyenLieu findNguyenLieuByID(@PathVariable("id") long id) {
		NguyenLieu nguyenlieu = repositoryNguyenLieu.getOne(id);
		if (nguyenlieu == null) {
			ResponseEntity.notFound().build();
		}
		// SET TEN LOAI NGUYEN LIEU
		nguyenlieu.setTenloainguyenlieu(GetTenLoaiNguyenLieu(nguyenlieu.getLoainguyenlieu_id()));
		// RESULT
		return nguyenlieu;
	}

	// THEM NGUYEN LIEU
	@RequestMapping(value = "/InsertNguyenLieu", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	@ResponseBody
	public NguyenLieu insertNguyenLieu(@RequestBody NguyenLieu nguyenlieuForm) {
		try {
			return repositoryNguyenLieu.InsertNguyenLieu(nguyenlieuForm);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}

	}

	// CAP NHAT NGUYEN LIEU
	@RequestMapping(value = "/UpdateNguyenLieu", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public ResponseEntity<NguyenLieu> updateNguyenLieu(@Valid @RequestBody NguyenLieu nguyenlieuForm) {
		NguyenLieu nl = repositoryNguyenLieu.getOne(nguyenlieuForm.getId());
		if (nl == null) {
			return ResponseEntity.notFound().build();
		}
		nl.setNo(nguyenlieuForm.getNo());
		nl.setName(nguyenlieuForm.getName());
		nl.setPrice(nguyenlieuForm.getPrice());
		nl.setDate(nguyenlieuForm.getDate());
		nl.setImage(nguyenlieuForm.getImage());
		nl.setLoainguyenlieu_id(nguyenlieuForm.getLoainguyenlieu_id());
		nl.setIsActive(nguyenlieuForm.getIsActive());

		NguyenLieu updatedNguyenLieu = repositoryNguyenLieu.save(nl);// update trong database
		return ResponseEntity.ok(updatedNguyenLieu);
	}

	// XOA NGUYEN LIEU
	@RequestMapping(value = "/NguyenLieu/{id}", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public ResponseEntity<NguyenLieu> deleteNguyenLieu1(@PathVariable(value = "id") Long id) {
		NguyenLieu nl = repositoryNguyenLieu.getOne(id);
		if (nl == null) {
			return ResponseEntity.notFound().build();
		}
		repositoryNguyenLieu.delete(nl);// delete trong database
		return ResponseEntity.ok().build();
	}

	// TIM KIEM
	@RequestMapping(value = "/SearchResources/{key}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public List<NguyenLieu> SearchResources(@PathVariable(value = "key") String key) {
		try {
			return repositoryNguyenLieu.TimNguyenLieuTheoTen(key);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
	
	// LOC NGUYEN LIEU THEO HIEN TRANG
	@RequestMapping(path = "/filterResource", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	@ResponseBody
	public List<NguyenLieu> filterNL (@RequestParam(value = "is_active", required = false) List<String> isActive){
		// This returns a JSON or XML with the users 
		if(isActive.size() == 0) {
			return repositoryNguyenLieu.findAll();
		}
		return repositoryNguyenLieu.filterNL(isActive);
	}
}