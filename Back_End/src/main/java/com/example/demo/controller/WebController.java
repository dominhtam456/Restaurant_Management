package com.example.demo.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LoaiNguyenLieu;
import com.example.demo.model.NguyenLieu;
import com.example.demo.service.BanService;
import com.example.demo.service.BepService;
import com.example.demo.service.HoaDonChiTietService;
import com.example.demo.service.HoaDonService;
import com.example.demo.service.LoaiMonAnService;
import com.example.demo.service.LoaiNguyenLieuService;
import com.example.demo.service.MonAnChiTietService;
import com.example.demo.service.MonAnService;
import com.example.demo.service.NguyenLieuService;

import net.bytebuddy.dynamic.loading.PackageDefinitionStrategy.Definition.Undefined;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Ban;
import com.example.demo.model.Bep;
import com.example.demo.model.BepID;
import com.example.demo.model.HoaDon;
import com.example.demo.model.HoaDonChiTiet;
import com.example.demo.model.HoaDonChiTietID;
import com.example.demo.model.LoaiMonAn;
import com.example.demo.model.MonAn;
import com.example.demo.model.MonAnChiTiet;
import com.example.demo.model.MonAnChiTietID;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class WebController {

	@Autowired
	LoaiNguyenLieuService repositoryLoaiNguyenLieu;
	
	@Autowired
	NguyenLieuService repositoryNguyenLieu;
	
	@Autowired
	MonAnService repositoryMonAn;
	
	@Autowired
	LoaiMonAnService repositoryLoaiMonAn;
	
	@Autowired
	MonAnChiTietService repositoryMonAnChiTiet;
	
	@Autowired
	BepService repositoryBep;
	

	/////////////////////////////// LOAI NGUYEN LIEU /////////////////////////

	// LAY ALL LOAI NGUYEN LIEU
	@RequestMapping(value = "/GetAllLoaiNguyenLieu", method = RequestMethod.GET)
	public ResponseEntity<List<LoaiNguyenLieu>> listAllLoaiNguyenLieu() {
		List<LoaiNguyenLieu> listLoaiNguyenLieu = repositoryLoaiNguyenLieu.findAll();
		if (listLoaiNguyenLieu.isEmpty()) {
			return new ResponseEntity<List<LoaiNguyenLieu>>(HttpStatus.NO_CONTENT);
		}
		// return ResponseEntity<List<Contact>>(listContact, HttpStatus.OK);
		return new ResponseEntity<List<LoaiNguyenLieu>>(listLoaiNguyenLieu, HttpStatus.OK);
	}

	// LAY 1 LOAI NGUYEN LIEU
	@RequestMapping(value = "/LoaiNguyenLieu/{id}", method = RequestMethod.GET)

	public LoaiNguyenLieu findLoaiNguyenLieuByID(@PathVariable("id") long id) {
		LoaiNguyenLieu loainguyenlieu = repositoryLoaiNguyenLieu.getOne(id);
		if (loainguyenlieu == null) {
			ResponseEntity.notFound().build();
		}

		return loainguyenlieu;
	}

	// THEM LOAI NGUYEN LIEU
	@RequestMapping(value = "/InsertLoaiNguyenLieu/", method = RequestMethod.POST)
	@ResponseBody
	public LoaiNguyenLieu insertLoaiNguyenLieu(@Valid @RequestBody LoaiNguyenLieu loainguyenlieuForm) {
		// @Valid: kiem tra xem co ton tai object trong body
		LoaiNguyenLieu lnl = repositoryLoaiNguyenLieu.save(loainguyenlieuForm);
		return lnl;
	}

	// CAP NHAT LOAI NGUYEN LIEU
	@RequestMapping(value = "/UpdateLoaiNguyenLieu/", method = RequestMethod.POST)
	public ResponseEntity<LoaiNguyenLieu> updateLoaiNguyenLieu(@Valid @RequestBody LoaiNguyenLieu loainguyenlieuForm) {
		LoaiNguyenLieu lnl = repositoryLoaiNguyenLieu.getOne(loainguyenlieuForm.getId());
		if (lnl == null) {
			return ResponseEntity.notFound().build();
		}

		lnl.setName(loainguyenlieuForm.getName());
		lnl.setUnit(loainguyenlieuForm.getUnit());

		LoaiNguyenLieu updatedLoaiNguyenLieu = repositoryLoaiNguyenLieu.save(lnl);// update trong database
		return ResponseEntity.ok(updatedLoaiNguyenLieu);
	}

	// XOA LOAI NGUYEN LIEU
	@RequestMapping(value = "/DeleteLoaiNguyenLieu", method = RequestMethod.POST)
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

	/////////////////////////////// NGUYEN LIEU ///////////////////////////

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
	@RequestMapping(value = "/InsertNguyenLieu", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_ATOM_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	@ResponseBody
	public NguyenLieu insertNguyenLieu(NguyenLieu nguyenlieuForm) {
		/*
		 * if(nguyenlieuForm!=null) {
		 * 
		 * }else { return null; }
		 */
		try {
			return repositoryNguyenLieu.save(nguyenlieuForm);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}

	}

	// CAP NHAT NGUYEN LIEU
	@RequestMapping(value = "/UpdateNguyenLieu", method = RequestMethod.POST, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public ResponseEntity<NguyenLieu> updateNguyenLieu(@Valid NguyenLieu nguyenlieuForm) {
		NguyenLieu nl = repositoryNguyenLieu.getOne(nguyenlieuForm.getId());
		if (nl == null) {
			return ResponseEntity.notFound().build();
		}

		nl.setName(nguyenlieuForm.getName());
		nl.setPrice(nguyenlieuForm.getPrice());
		nl.setDate(nguyenlieuForm.getDate());

		NguyenLieu updatedNguyenLieu = repositoryNguyenLieu.save(nl);// update trong database
		return ResponseEntity.ok(updatedNguyenLieu);
	}

	// XOA NGUYEN LIEU
	@RequestMapping(value = "/NguyenLieu/{id}", method = RequestMethod.POST)
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
	public List<NguyenLieu> SearchResources(@PathVariable(value = "key") String key) {
		try {
			return repositoryNguyenLieu.TimNguyenLieuTheoTen(key);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

	/////////////////////////////// LOAI MON AN /////////////////////////

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

	/////////////////////////////// MON AN ///////////////////////////

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
		ma.setStatus(monanForm.getStatus());

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
	
	/////////////////////////////// MON AN CHI TIET///////////////////////////
	
	// GET ALL MON AN CHI TIET
		@RequestMapping(path = "/GetAllMonAnChiTiet", produces = MediaType.APPLICATION_JSON_VALUE)
		public List<MonAnChiTiet> GetAllMonAnChiTiet() {
			
			return repositoryMonAnChiTiet.GetAllMonAnChiTiets(); 
		}
	
	// GET 1 MON AN CHI TIET
	@RequestMapping(path = "/GetMonAnChiTiet/{monanID}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<MonAnChiTiet> GetMonAnChiTiet(@PathVariable(value = "monanID") int monanID) {
		return repositoryMonAnChiTiet.GetMonAnChiTietByMonAnID(monanID);
	}
	
	
	// INSERT MON AN CHI TIET
	@RequestMapping(value = "/InsertMonAnChiTiet", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	public MonAnChiTiet InserMACT(@Valid @RequestBody MonAnChiTiet mact) {

		return repositoryMonAnChiTiet.InSertMACT(mact);

	}
	
	
	// DELETE MON AN CHI TIET
	@RequestMapping(value = "/DeleteMonAnChiTiet/{monanID}&{nguyenlieuID}", method = RequestMethod.GET)
	public boolean DeleteMACT(@PathVariable("monanID") Long monanID,
			@PathVariable("nguyenlieuID") Long nguyenlieuID) {
		return repositoryMonAnChiTiet.DeleteMACT(new MonAnChiTietID(monanID, nguyenlieuID));
	}
	
	
	/////////////////////// QUAN LY BAN //////////////////////////////////

	@Autowired
	BanService repositoryBan;

	// LAY ALL BAN
	@RequestMapping(path = "/GetAllBan", produces = MediaType.APPLICATION_JSON_VALUE)
	public java.util.List<Ban> GetAllBans() {
		// This returns a JSON or XML with the users
		return repositoryBan.GetAllBans();
	}

	// LAY 1 BAN
	@RequestMapping(value = "/Ban/{id}", method = RequestMethod.GET)
	public Ban FindBanByID(@PathVariable("id") long id) {
		return repositoryBan.GetBan(id);
	}

	// THEM BAN
	@RequestMapping(value = "/InsertBan", method = RequestMethod.POST, produces = {
			MediaType.APPLICATION_ATOM_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	@ResponseBody
	public boolean InsertBan(Ban banForm) {

		try {
			return repositoryBan.InsertBan(banForm);
		} catch (Exception e) {
			// TODO: handle exception
			return false;
		}

	}

	// CAP NHAT BAN
	@RequestMapping(value = "/UpdateBan", method = RequestMethod.POST, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public boolean UpdateBan(@Valid Ban banForm) {
		try {
			return repositoryBan.UpdateBan(banForm);
		} catch (Exception e) {
			// TODO: handle exception
			return false;
		}

	}

	// XOA BAN
	@RequestMapping(value = "/DeleteBan/{id}", method = RequestMethod.POST)
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
	public List<Ban> SearchBans(@PathVariable(value = "key") String key) {
		try {
			return repositoryBan.SearchBans(key);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}

	// CAP NHAT TRANG THAI BAN

	@RequestMapping(value = "/UpdateStatusBan", method = RequestMethod.GET)
	public void UpdateStatusBan() {
		repositoryBan.CapNhatTrangThaiBan("aaa", "Bàn 1");
	}

	//////////////////////////// QUAN LY HOA DON//////////////////////////////

	@Autowired
	HoaDonService repositoryHoaDon;

	// LAY ALL HOA DON
	@RequestMapping(path = "/GetAllHoaDon", produces = MediaType.APPLICATION_JSON_VALUE)
	public java.util.List<HoaDon> GetAllHoaDons() {
		// This returns a JSON or XML with the users
		return repositoryHoaDon.GetAllHoaDons();
	}

	// LAY 1 HoaDon
	@RequestMapping(value = "/HoaDon/{id}", method = RequestMethod.GET)
	public HoaDon FindHoaDonByID(@PathVariable("id") long id) {
		return repositoryHoaDon.GetHoaDon(id);
	}

	// THEM HoaDon

	@RequestMapping(value = "/InsertHoaDon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	public HoaDon InserHoaDon(@Valid @RequestBody HoaDon hd) {

		return repositoryHoaDon.InsertHoaDon(hd);

	}

	// CAP NHAT HoaDon
	@RequestMapping(value = "/UpdateHoaDon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public boolean UpdateHoaDon(@Valid @RequestBody HoaDon hdForm) {
		try {
			return repositoryHoaDon.UpdateHoaDon(hdForm);
		} catch (Exception e) {
			// TODO: handle exception
			return false;
		}

	}

	// XOA HoaDon
	@RequestMapping(value = "/DeleteHoaDon/{id}", method = RequestMethod.POST)
	public boolean DeleteHoaDon(@PathVariable(value = "id") Long id) {
		try {
			return repositoryHoaDon.DeleteHoaDon(id);
		} catch (Exception e) {
			// TODO: handle exception
			return false;
		}
	}

	// GET HOA DON TO STATUS
	@RequestMapping(path = "/GetHoaDonToStatus/{status}", produces = MediaType.APPLICATION_JSON_VALUE)
	public java.util.List<HoaDon> GetHoaDonToStatus(@PathVariable(value = "status") boolean status) {
		// This returns a JSON or XML with the users
		return repositoryHoaDon.GetHoaDonToStatus(status);
	}

	// ----------------------Quan ly chi tiet hoa don-----------------------------//
	@Autowired
	HoaDonChiTietService repositoryHDCT;

	// LAY ALL HOA DON CHI TIET
	@RequestMapping(path = "/GetAllHoaDonChiTiet", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<HoaDonChiTiet> GetAllHoaDonChiTiets() {
		// This returns a JSON or XML with the users
		return repositoryHDCT.GetAllHoaDonChiTiets();
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
	// ------------------------THONG KE-----------------------------//

	public class CustomComparator implements java.util.Comparator<HoaDonChiTiet> {
		@Override
		public int compare(HoaDonChiTiet o1, HoaDonChiTiet o2) {
			return o2.getSoluong().compareTo(o1.getSoluong());
		}
	}

	public class CustomComparatorSortHoaDonDate implements java.util.Comparator<HoaDon> {
		@Override
		public int compare(HoaDon o1, HoaDon o2) {
			return o1.getDate().compareTo(o2.getDate());
		}
	}

	// KIEM TRA MON AN CHUA TON TAI
	public static HoaDonChiTiet KiemTraTonTai(List<HoaDonChiTiet> list, HoaDonChiTiet hdct) {
		if (list == null) {
			return null;
		} else {
			for (HoaDonChiTiet hoaDonChiTiet : list) {
				if (hoaDonChiTiet.getHoadonchitiet_id().getMonan_id() == hdct.getHoadonchitiet_id()
						.getMonan_id()) {
					return hoaDonChiTiet;
				}
			}
			return null;
		}
	}

	// HAM THONG KE MON AN THEO NGAY
	public List<HoaDonChiTiet> ThongKeMonAnTheoNgay(Date fromDate, Date toDate) {
		List<HoaDonChiTiet> list = new ArrayList<>();
		List<HoaDonChiTiet> dsAllHDCT = repositoryHDCT.findAll();
		String fromdate = String.valueOf(fromDate);
		String todate = String.valueOf(toDate);
		for (HoaDonChiTiet hoaDonChiTiet : dsAllHDCT) {
			String date = String.valueOf(repositoryHoaDon
					.getOne(Long.valueOf(hoaDonChiTiet.getHoadonchitiet_id().getHoadon_id())).getDate());
			HoaDonChiTiet kq = KiemTraTonTai(list, hoaDonChiTiet);

			if (date.compareTo(fromdate) >= 0 && date.compareTo(todate) <= 0) {
				if (kq == null) {
					hoaDonChiTiet.setTenMonAn(
							repositoryMonAn.getOne(Long.valueOf(hoaDonChiTiet.getHoadonchitiet_id().getMonan_id()))
									.getName());
					list.add(hoaDonChiTiet);
				}
				if (kq != null) {
					kq.setSoluong(
							kq.getSoluong() + hoaDonChiTiet.getSoluong());

				}

			}

		}
		Collections.sort(list, new CustomComparator());
		return list;
	}

	// HAM THONG KE TONG TIEN
	public String ThongKeTongTienTheoNgay(Date fromDate, Date toDate) {
		int tongTien = 0;
		String fromdate = String.valueOf(fromDate);
		String todate = String.valueOf(toDate);
		for (HoaDonChiTiet hoaDonChiTiet : repositoryHDCT.findAll()) {
			String date = String.valueOf(repositoryHoaDon
					.getOne(Long.valueOf(hoaDonChiTiet.getHoadonchitiet_id().getHoadon_id())).getDate());

			if (date.compareTo(fromdate) >= 0 && date.compareTo(todate) <= 0) {
				tongTien += Integer.valueOf(hoaDonChiTiet.getThanhTien());

			}

		}

		return String.valueOf(tongTien);
	}

	// HAM THONG KE HOA DON
	public List<HoaDon> ThongKeHoaDonTheoNgay(Date fromDate, Date toDate) {
		List<HoaDon> dsAllHDCT = repositoryHoaDon.findAll();
		List<HoaDon> list=new ArrayList<>();
		String fromdate = String.valueOf(fromDate);
		String todate = String.valueOf(toDate);
		for (HoaDon hoaDon : dsAllHDCT) {
			String date = String.valueOf(hoaDon.getDate());
			if ((date.compareTo(fromdate) >= 0 && date.compareTo(todate) <=0) && hoaDon.getStatus() == true) {			
				for (HoaDonChiTiet hoaDonChiTiet : repositoryHDCT.findAll()) {
					if(hoaDon.getId().equals(Long.valueOf(hoaDonChiTiet.getHoadonchitiet_id().getHoadon_id()))) {
						hoaDon.setTongTien(hoaDon.getTongTien()+Integer.valueOf(hoaDonChiTiet.getThanhTien()));
					}
                   
				}
				
				list.add(hoaDon);
			}
			
			
		}
		Collections.sort(list,new CustomComparatorSortHoaDonDate());
		return list;
	}
	
	

	

	// REQUEST THONG KE MON AN Theo Ngay
	@RequestMapping(path = "/ThongKeMonAn", method = RequestMethod.GET)
	@ResponseBody
	public List<HoaDonChiTiet> ThongKeMonAn(@RequestParam(value = "fromDate") Date fromDate,
			@RequestParam(value = "toDate") Date toDate) {
		// This returns a JSON or XML with the users

		return this.ThongKeMonAnTheoNgay(fromDate, toDate);

	}

	// REQUEST THONG ke Tong Tien Theo Ngay
	@RequestMapping(path = "/ThongKeTongTien", method = RequestMethod.GET)
	@ResponseBody
	public String ThongKeTongTien(@RequestParam(value = "fromDate") Date fromDate,
			@RequestParam(value = "toDate") Date toDate) {
		// This returns a JSON or XML with the users

		return this.ThongKeTongTienTheoNgay(fromDate, toDate);

	}
	// REQUEST THONG ke Hoa Don Theo Ngay
		@RequestMapping(path = "/ThongKeHoaDon", method = RequestMethod.GET)
		@ResponseBody
		public List<HoaDon> ThongKeHoaDon(@RequestParam(value = "fromDate") Date fromDate,
				@RequestParam(value = "toDate") Date toDate) {
			// This returns a JSON or XML with the users

			return this.ThongKeHoaDonTheoNgay(fromDate, toDate);

		}
		
	// ------------------------BEP-----------------------------//
	
	@RequestMapping(path = "/getAllBep", method = RequestMethod.GET)
	public List<Bep> getAllBep(){
		return repositoryBep.findAll();
	}
	
	@RequestMapping(path = "/getAllBepByIDBep/{bepID}", method = RequestMethod.GET)
	public List<Bep> getAllBepByIDBep(@PathVariable(value = "bepID") int bepID){
		return repositoryBep.getBepByBep_ID(bepID);
	}
	
	@RequestMapping(path = "/insertToBep/{bepID}&{hoadonID}", method = RequestMethod.POST)
	public Bep insertToBep(@PathVariable(value = "bepID") int bepID, @PathVariable(value = "hoadonID") int hoadonID){
		return repositoryBep.save(new Bep(new BepID(bepID, hoadonID),0));
	}
	
	@RequestMapping(path = "/deleteFromBep/{bepID}&{hoadonID}", method = RequestMethod.POST)
	public boolean deleteFromBep(@PathVariable(value = "bepID") int bepID, @PathVariable(value = "hoadonID") int hoadonID){
		repositoryBep.deleteById(new BepID(bepID, hoadonID));
		return true;
	}

}