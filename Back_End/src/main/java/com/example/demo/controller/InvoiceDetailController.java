package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

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

import com.example.demo.service.HoaDonChiTietService;
import com.example.demo.service.HoaDonService;
import com.example.demo.service.HoadonBanService;
import com.example.demo.service.MonAnService;

import com.example.demo.model.HoaDonChiTiet;
import com.example.demo.model.HoaDonChiTietID;
import com.example.demo.model.HoadonBan;
import com.example.demo.model.InvoiceDetailDTO;

@RestController
@RequestMapping("/api")
@CrossOrigin

public class InvoiceDetailController {
    @Autowired
    HoaDonChiTietService repositoryHDCT;
    
    @Autowired
	MonAnService repositoryMonAn;
	
	@Autowired
	HoadonBanService hoadonBanService;

	@Autowired
	HoaDonService repositoryHoaDon;

	// LAY ALL HOA DON CHI TIET
	@RequestMapping(path = "/GetAllHoaDonChiTiet", produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public List<HoaDonChiTiet> GetAllHoaDonChiTiets() {
		// This returns a JSON or XML with the users
		List<HoaDonChiTiet> listHDCT = repositoryHDCT.findAll();
		for (HoaDonChiTiet item : listHDCT) {
			item.setTenMonAn(
				repositoryMonAn.getOne(Long.valueOf(item.getHoadonchitiet_id().getMonan_id()))
					.getName());
		}
		return listHDCT;
	}

	// LAY CTHD THEO ID_HOADON
	@RequestMapping(path = "/GetHDCTByID/{hoadonID}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public List<HoaDonChiTiet> GetHDCTByID(@PathVariable(value = "hoadonID") int hoadonID) {
		for (HoaDonChiTiet item : repositoryHDCT.GetHoaDonChiTietToHoaDonID(hoadonID)) {
			item.setTenMonAn(
					repositoryMonAn.getOne(Long.valueOf(item.getHoadonchitiet_id().getMonan_id()))
							.getName());
		}
		return repositoryHDCT.GetHoaDonChiTietToHoaDonID(hoadonID);
	}

	// LAY 1 Hoa Don Chi Tiet
	@RequestMapping(value = "/HoaDonChiTiet/{hoadon_ID}&{monan_ID}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public HoaDonChiTiet FindHoaDonChiTietByID(@PathVariable("hoadon_ID") Integer hoadon_ID,
			@PathVariable("monan_ID") Integer monan_ID) {
		return repositoryHDCT.GetHoaDonChiTiet(new HoaDonChiTietID(hoadon_ID, monan_ID));
	}

	// Them Chi Tiet Hoa Don
	@RequestMapping(value = "/InsertHoaDonChiTiet", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	@ResponseBody
	public HoaDonChiTiet InserHoaDon(@RequestBody HoaDonChiTiet hdct) {
		return repositoryHDCT.InSertHDCT(hdct);

	}

	// Update chi tiet hao don
	@RequestMapping(value = "/UpdateHoaDonChiTiet", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public boolean UpdateHoaDonChiTiet(@RequestBody HoaDonChiTiet hdctForm) {
		return repositoryHDCT.UpdateHoaDonChiTiet(hdctForm);

	}

	// XOA HoaDonChiTiet
	@RequestMapping(value = "/DeleteHoaDonChiTiet/{hoadon_ID}&{monan_ID}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public boolean DeleteHDCT(@PathVariable("hoadon_ID") Integer hoadon_ID,
			@PathVariable("monan_ID") Integer monan_ID) {
		return repositoryHDCT.DeLeTeCTHD(new HoaDonChiTietID(hoadon_ID, monan_ID));
	}

	@RequestMapping(path = "/GetFoodByStatus/{status}", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public List<InvoiceDetailDTO> GetFoodByStatus(@PathVariable(value = "status") String status) {
		List<HoaDonChiTiet> listHDCT = repositoryHDCT.GetHDCTByStatus(status); 
		List<InvoiceDetailDTO> response = new ArrayList<>(); 

		for (HoaDonChiTiet item : listHDCT) {
			item.setTenMonAn(
					repositoryMonAn.getOne(Long.valueOf(item.getHoadonchitiet_id().getMonan_id()))
							.getName());

			List<HoadonBan> ban = hoadonBanService.Get(item.getHoadonchitiet_id().getHoadon_id());
			
			InvoiceDetailDTO iv = new InvoiceDetailDTO(
				item.getHoadonchitiet_id().getMonan_id(),
				item.getHoadonchitiet_id().getHoadon_id(), 
				item.getSoluong(), 
				item.getStatus(), 
				item.getTenMonAn(),
				item.getComment(),  
				ban);
			response.add(iv);
		}
		return response;
	}

	@RequestMapping(path = "/GetUncompletedFood", method = RequestMethod.GET)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public List<InvoiceDetailDTO> GetUncompletedFood() {
		List<HoaDonChiTiet> listHDCT = repositoryHDCT.GetUncompletedHDCT(); 
		List<InvoiceDetailDTO> response = new ArrayList<>(); 

		for (HoaDonChiTiet item : listHDCT) {
			if(repositoryHoaDon.GetHoaDon(item.getHoadonchitiet_id().getHoadon_id()).getStatus())
				continue;
			item.setTenMonAn(
					repositoryMonAn.getOne(Long.valueOf(item.getHoadonchitiet_id().getMonan_id()))
							.getName());

			List<HoadonBan> ban = hoadonBanService.Get(item.getHoadonchitiet_id().getHoadon_id());

			InvoiceDetailDTO iv = new InvoiceDetailDTO(
				item.getHoadonchitiet_id().getMonan_id(),
				item.getHoadonchitiet_id().getHoadon_id(), 
				item.getSoluong(),
				item.getStatus(), 
				item.getTenMonAn(), 
				item.getComment(),
				ban);
			response.add(iv);
		}
		return response;
	}

	@RequestMapping(value = "/UpdateHDCTStatus", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public Boolean UpdateHDCTStatus(
		@RequestParam(value = "status") String status,
		@RequestParam(value = "hoaDonId") Long hoaDonId,
		@RequestParam(value = "monAnId") Long monAnId) {
		try{
			repositoryHDCT.UpdateHDCTStatus(status, hoaDonId,monAnId);
			return true;
		}catch(Exception e){
			throw e;
		}
	}

	@RequestMapping(value = "/UpdateHDCTByHoadonId", method = RequestMethod.POST)
	@PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
	public Boolean DeleteHDCTByHoadonId(@RequestBody List<HoaDonChiTiet> listHDCT ) {
		try{
			repositoryHDCT.UpdateHDCT(listHDCT);
			return true;
		}catch(Exception e){
			return false;
		}
	}

}