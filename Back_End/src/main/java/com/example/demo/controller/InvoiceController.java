package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import com.example.demo.service.HoaDonService;
import com.example.demo.service.MergeTableService;
import com.example.demo.model.HoaDon;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class InvoiceController {
    @Autowired
	HoaDonService repositoryHoaDon;

	@Autowired
	MergeTableService mergeTableService;

	// LAY ALL HOA DON
	@RequestMapping(path = "/GetAllHoaDon", produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public java.util.List<HoaDon> GetAllHoaDons() {
		// This returns a JSON or XML with the users
		return repositoryHoaDon.GetAllHoaDons();
	}

	// LAY 1 HoaDon
	@RequestMapping(value = "/HoaDon/{id}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public HoaDon FindHoaDonByID(@PathVariable("id") long id) {
		return repositoryHoaDon.GetHoaDon(id);
	}

	// THEM HoaDon

	@RequestMapping(value = "/InsertHoaDon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	@ResponseBody
	public HoaDon InserHoaDon(@Valid @RequestBody HoaDon hd) {

		return repositoryHoaDon.InsertHoaDon(hd);

	}

	// CAP NHAT HoaDon
	@RequestMapping(value = "/UpdateHoaDon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public boolean UpdateHoaDon(@Valid @RequestBody HoaDon hdForm) {
		try {
			return repositoryHoaDon.UpdateHoaDon(hdForm);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}

	}

	// XOA HoaDon
	@RequestMapping(value = "/DeleteHoaDon/{id}", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public boolean DeleteHoaDon(@PathVariable(value = "id") Long id) {
		try {
			return repositoryHoaDon.DeleteHoaDon(id);
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}

	// GET HOA DON TO STATUS
	@RequestMapping(path = "/GetHoaDonToStatus/{status}", produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public java.util.List<HoaDon> GetHoaDonToStatus(@PathVariable(value = "status") boolean status) {
		// This returns a JSON or XML with the users
		return repositoryHoaDon.GetHoaDonToStatus(status);
	}

	@RequestMapping(value = "/UpdateInvoiceStatus", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public boolean UpdateInvoiceStatus(
		@RequestParam(value = "status") int status,
		@RequestParam(value = "id") Long id) {
		try {
			repositoryHoaDon.UpdateStatusInvoice(status, id);
			return true;
		} catch (Exception e) {
			// TODO: handle exception
			throw e;
		}
	}

	@RequestMapping(value = "/MergeTable", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public boolean MergeTale(@Valid @RequestBody List<Long> list) {
		try {
			mergeTableService.mergeTable(list);
			return true;
		} catch (Exception e) {
			throw e;
		}
	}
}