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

import com.example.demo.service.BanService;

import com.example.demo.model.Ban;
import com.example.demo.model.LoaiMonAn;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TableController {
    @Autowired
	BanService repositoryBan;

	// LAY ALL BAN
	@RequestMapping(path = "/GetAllBan", produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public java.util.List<Ban> GetAllBans() {
		// This returns a JSON or XML with the users
		return repositoryBan.GetAllBans();
	}

	@RequestMapping(path = "/GetTabeByStatus/{status}", produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public java.util.List<Ban> GetTabeByStatus(@PathVariable("status") int status) {
		// This returns a JSON or XML with the users
		return repositoryBan.GetTabeByStatus(status);
	}

	// LAY 1 BAN
	@RequestMapping(value = "/Ban/{id}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public Ban FindBanByID(@PathVariable("id") long id) {
		return repositoryBan.GetBan(id);
	}

	// THEM BAN
	@RequestMapping(value = "/InsertBan", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public Ban InsertBan(@RequestBody Ban banForm) {

		try {
			return repositoryBan.InsertBan(banForm);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}

	}

	// CAP NHAT BAN
	@RequestMapping(value = "/UpdateBan", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public boolean UpdateBan(@RequestBody Ban banForm) {
		try {
			return repositoryBan.UpdateBan(banForm);
		} catch (Exception e) {
			// TODO: handle exception
			return false;
		}

	}

	// XOA BAN
	@RequestMapping(value = "/DeleteBan/{id}", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public boolean DeleteBan(@PathVariable(value = "id") Long id) {
		try {
			return repositoryBan.DeleteBan(id);
		} catch (Exception e) {
			// TODO: handle exception
			return false;
		}
	}

	// TIM KIEM
	@RequestMapping(value = "/SearchBans/{key}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public List<Ban> SearchBans(@PathVariable(value = "key") String key) {
		try {
			return repositoryBan.SearchBans(key);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

	// CAP NHAT TRANG THAI BAN

	@RequestMapping(value = "/UpdateStatusBan/{status}", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public Boolean UpdateStatusBan(@RequestBody List<Ban> listTable, @PathVariable(value = "status") String status) {
		try{
			for (Ban ban : listTable) {
				repositoryBan.CapNhatTrangThaiBan(status, ban.getId(),ban.getColor());
			}
			return true;
		}catch(Exception e){
			return false;
		}
	}
	
	//LOC DANH SACH BAN THEO HIEN TRANG
	@RequestMapping(path = "/filterTable", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	@ResponseBody
	public List<Ban> TableFliter(@RequestParam(value = "is_active", required = false) List<String> isActive){
		// This returns a JSON or XML with the users 
		if(isActive.size() == 0) {
			return repositoryBan.findAll();
		}
		return repositoryBan.TableFliter(isActive);
	}
}