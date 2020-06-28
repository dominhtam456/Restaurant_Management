package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.HoaDonChiTietService;
import com.example.demo.service.MonAnService;

import com.example.demo.model.HoaDonChiTiet;
import com.example.demo.model.HoaDonChiTietID;

@RestController
@RequestMapping("/api")
@CrossOrigin

public class InvoiceDetailController {
    @Autowired
    HoaDonChiTietService repositoryHDCT;
    
    @Autowired
	MonAnService repositoryMonAn;

	// LAY ALL HOA DON CHI TIET
	@RequestMapping(path = "/GetAllHoaDonChiTiet", produces = MediaType.APPLICATION_JSON_VALUE)
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
	public HoaDonChiTiet FindHoaDonChiTietByID(@PathVariable("hoadon_ID") Integer hoadon_ID,
			@PathVariable("monan_ID") Integer monan_ID) {
		return repositoryHDCT.GetHoaDonChiTiet(new HoaDonChiTietID(hoadon_ID, monan_ID));
	}

	// Them Chi Tiet Hoa Don
	@RequestMapping(value = "/InsertHoaDonChiTiet", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public HoaDonChiTiet InserHoaDon(@RequestBody HoaDonChiTiet hdct) {
		return repositoryHDCT.InSertHDCT(hdct);

	}

	// Update chi tiet hao don
	@RequestMapping(value = "/UpdateHoaDonChiTiet", method = RequestMethod.POST)
	public boolean UpdateHoaDonChiTiet(@RequestBody HoaDonChiTiet hdctForm) {
		return repositoryHDCT.UpdateHoaDonChiTiet(hdctForm);

	}

	// XOA HoaDonChiTiet
	@RequestMapping(value = "/DeleteHoaDonChiTiet/{hoadon_ID}&{monan_ID}", method = RequestMethod.GET)
	public boolean DeleteHDCT(@PathVariable("hoadon_ID") Integer hoadon_ID,
			@PathVariable("monan_ID") Integer monan_ID) {
		return repositoryHDCT.DeLeTeCTHD(new HoaDonChiTietID(hoadon_ID, monan_ID));
	}
}