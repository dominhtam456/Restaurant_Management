package com.example.demo.controller;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.HoaDonChiTietService;
import com.example.demo.service.HoaDonService;
import com.example.demo.service.MonAnService;

import com.example.demo.model.HoaDon;
import com.example.demo.model.HoaDonChiTiet;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class StatisticalController {
    @Autowired
    MonAnService repositoryMonAn;
    
    @Autowired
    HoaDonChiTietService repositoryHDCT;

    @Autowired
	HoaDonService repositoryHoaDon;

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
			HoaDon hd = repositoryHoaDon.getOne(Long.valueOf(hoaDonChiTiet.getHoadonchitiet_id().getHoadon_id()));
			String date = String.valueOf(hd.getDate());
			HoaDonChiTiet kq = KiemTraTonTai(list, hoaDonChiTiet);

			if (date.compareTo(fromdate) >= 0 && date.compareTo(todate) <= 0 && hd.getStatus()) {
				if (kq == null )
				{
					hoaDonChiTiet.setTenMonAn(
							repositoryMonAn.getOne(Long.valueOf(hoaDonChiTiet.getHoadonchitiet_id().getMonan_id())).getName());
					list.add(hoaDonChiTiet);
				}
				if (kq != null) {
					kq.setSoluong(kq.getSoluong() + hoaDonChiTiet.getSoluong());
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
		public List<HoaDon> ThongKeHoaDon(@RequestParam(value = "fromDate") String fromDate,
				@RequestParam(value = "toDate") String toDate) {
			// This returns a JSON or XML with the users 
			List<HoaDon> list = repositoryHoaDon.GetInvoiceByDate(fromDate, toDate);
			for (HoaDon hoaDon : list) {
				int sum = 0;
				for (HoaDonChiTiet hoaDonChiTiet : repositoryHDCT.GetHoaDonChiTietToHoaDonID(hoaDon.getId().intValue())) {
					sum += (hoaDonChiTiet.getSoluong() * Integer.parseInt(hoaDonChiTiet.getPrice()));
				}
				hoaDon.setTongTien(sum);
			}
			return list;
		}
}