package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.BepService;
import com.example.demo.service.HoadonBanService;
import com.example.demo.model.Bep;
import com.example.demo.model.BepID;
import com.example.demo.model.HoadonBan;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class HoadonBanController {

    @Autowired
    private HoadonBanService hoadonBanService;

    @RequestMapping(path = "/get", produces = MediaType.APPLICATION_JSON_VALUE)
	public java.util.List<HoadonBan> getAllMonAn() {
		return hoadonBanService.findAll();
    }
    
    @RequestMapping(value = "/InsertHoaDonBan", method = RequestMethod.POST, 
        produces = MediaType.APPLICATION_JSON_VALUE,
        consumes = MediaType.APPLICATION_JSON_VALUE)
    public HoadonBan insertNguyenLieu(@RequestBody HoadonBan hoaddonBan) {
       return hoadonBanService.save(hoaddonBan);
    }
}