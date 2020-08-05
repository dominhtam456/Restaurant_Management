package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import com.example.demo.service.BanService;
import com.example.demo.service.BepService;
import com.example.demo.service.HoadonBanService;
import com.example.demo.model.Ban;
import com.example.demo.model.Bep;
import com.example.demo.model.BepID;
import com.example.demo.model.HoadonBan;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class HoadonBanController {

    @Autowired
    private HoadonBanService hoadonBanService;

    @Autowired
	BanService repositoryBan;

    @RequestMapping(path = "/get", produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public java.util.List<HoadonBan> getAllMonAn() {
		return hoadonBanService.findAll();
    }
    
    @RequestMapping(value = "/InsertHoaDonBan", method = RequestMethod.POST, 
        produces = MediaType.APPLICATION_JSON_VALUE,
        consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public Boolean insertNguyenLieu(@RequestBody List<HoadonBan> listHDB) {
        try{
            for (HoadonBan hoadonBan : listHDB) {
                hoadonBanService.save(hoadonBan);
            }
            return true;
        }catch(Exception ex){
            return false;
        }
    }

    @RequestMapping(value = "/updateHDB", method = RequestMethod.POST)
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public Boolean updateHDB(
        @RequestParam(value = "fromTable") Long fromTable,
        @RequestParam(value = "toTable") Long toTable,
        @RequestParam(value = "hoadon_id") Long hoadon_id) {
        try{
            hoadonBanService.updateHDB(hoadon_id, toTable, fromTable);
            Ban ban = repositoryBan.GetBan(fromTable);
            repositoryBan.CapNhatTrangThaiBan("Có", toTable, ban.getColor());
            repositoryBan.CapNhatTrangThaiBan("Trong", fromTable, "white");
            return true;
        }catch(Exception ex){
            return false;
        }
    }
}