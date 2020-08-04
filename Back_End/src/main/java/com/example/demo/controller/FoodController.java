package com.example.demo.controller;

import javax.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.LoaiMonAnService;
import com.example.demo.service.MonAnService;

import com.example.demo.model.MonAn;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class FoodController {

    @Autowired
    MonAnService repositoryMonAn;

    @Autowired
	LoaiMonAnService repositoryLoaiMonAn;
    
    // LAY TEN LOAI MON AN cho TABLE MON AN THONG QUA ID LOAIMONAN
	public String GetTenLoaiMonAn(long idLoaiMonAn) {
		if (repositoryLoaiMonAn.getOne(idLoaiMonAn) != null) {
			return repositoryLoaiMonAn.getOne(idLoaiMonAn).getName();
		} else {
			return "null";
		}
	}

	// LAY ALL MON AN

	@RequestMapping(path = "/GetAllMonAn", produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public java.util.List<MonAn> getAllMonAn() {
		// This returns a JSON or XML with the users
		for (MonAn monan : repositoryMonAn.findAll()) {
			// Set ten loai nguyen lieu

			monan.setTenloaimonan(GetTenLoaiMonAn(monan.getLoaimonan_id()));
		}
		return repositoryMonAn.findAll();
	}

	// LAY 1 MON AN
	@RequestMapping(value = "/MonAn/{id}", method = RequestMethod.GET)

	public MonAn findMonAnByID(@PathVariable("id") long id) {
		MonAn monan = repositoryMonAn.getOne(id);
		if (monan == null) {
			ResponseEntity.notFound().build();
		}
		// SET TEN LOAI MON AN
		monan.setTenloaimonan(GetTenLoaiMonAn(monan.getLoaimonan_id()));
		// RESULT
		return monan;
	}

	// THEM MON AN
	@RequestMapping(value = "/InsertMonAn", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_ATOM_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	@ResponseBody
	public MonAn insertMonAn(MonAn monanForm) {
		if (String.valueOf(monanForm.getLoaimonan_id()) == "null") {
			return null;
		}
		try {
			return repositoryMonAn.save(monanForm);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}

	}

	// CAP NHAT MON AN
	@RequestMapping(value = "/UpdateMonAn", method = RequestMethod.POST, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public ResponseEntity<MonAn> updateMonAn(@Valid MonAn monanForm) {
		MonAn ma = repositoryMonAn.getOne(monanForm.getId());
		if (ma == null) {
			return ResponseEntity.notFound().build();
		}

		ma.setName(monanForm.getName());
		ma.setPrice(monanForm.getPrice());
		ma.setUnit(monanForm.getUnit());

		MonAn updatedMonAn = repositoryMonAn.save(ma);// update trong database
		return ResponseEntity.ok(updatedMonAn);
	}

	// XOA MON AN
	@RequestMapping(value = "/MonAn/{id}", method = RequestMethod.POST)
	public ResponseEntity<MonAn> deleteMonAn(@PathVariable(value = "id") Long id) {
		MonAn ma = repositoryMonAn.getOne(id);
		if (ma == null) {
			return ResponseEntity.notFound().build();
		}
		repositoryMonAn.delete(ma);// delete trong database
		return ResponseEntity.ok().build();
	}

	// TIM KIEM
	@CrossOrigin
	@RequestMapping(value = "/SearchFoods/{key}", method = RequestMethod.GET)
	public List<MonAn> SearchFoods(@PathVariable(value = "key") String key) {
		try {
			for (MonAn monan : repositoryMonAn.TimMonAnTheoTen(key)) {
				// Set ten loai nguyen lieu

				monan.setTenloaimonan(GetTenLoaiMonAn(monan.getLoaimonan_id()));
			}
			return repositoryMonAn.TimMonAnTheoTen(key);
		} catch (Exception e) {
			return null;
		}
	}
}