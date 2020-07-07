package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.HoaDonChiTiet;
import com.example.demo.model.HoaDonChiTietID;

public interface HoaDonChiTietService extends JpaRepository<HoaDonChiTiet, HoaDonChiTietID> {

	// GET DANH SACH Hoa Don Chi Tiet
	public default List<HoaDonChiTiet> GetAllHoaDonChiTiets() {
		return this.findAll();
	}

	// GET 1 Hoa Don CT
	public default HoaDonChiTiet GetHoaDonChiTiet(HoaDonChiTietID id) {
		return this.getOne(id);

	}

	
	// Them chi tiet hoa don
	public default HoaDonChiTiet InSertHDCT(HoaDonChiTiet o) {
		
		if (o != null) {
			return save(o);
			
		} else {
			return null;
		}

	}
  
	// Update Hoa Don Chi Tiet
	public default boolean UpdateHoaDonChiTiet(HoaDonChiTiet o) {
		 HoaDonChiTiet temp = this.getOne(o.getHoadonchitiet_id());
		 if (temp!=null)
		 { 
			 temp.setPrice(o.getPrice());
			 temp.setSoluong(o.getSoluong());
			 this.save(temp); 
			 return true; 
	     }
		 else { 
			 return false; 
		 }
		 
	}


	// Delete CTHD
	public default boolean DeLeTeCTHD(HoaDonChiTietID hdctID) {
		if (hdctID != null) {
			this.deleteById(hdctID);
			return true;
		} else {
			return false;
		}

	}
	
	
	//GET CHI TIET HOA DON THEO ID_HOADON
	
		public default List<HoaDonChiTiet> GetHoaDonChiTietToHoaDonID(int hoadonID) {
			List<HoaDonChiTiet> list=new ArrayList<HoaDonChiTiet>();
			for (HoaDonChiTiet o : this.findAll()) {
				if(o.getHoadonchitiet_id().getHoadon_id()==hoadonID) {
					list.add(o);
				}
			}
			return list;
		}
	/*
	@Async
	@Query("SELECT h FROM Hoadonchitiet h WHERE h.HOADON_HOADON_ID = ?hoadonID")
	public  List<HoaDonChiTiet> GetHoaDonChiTietToHoaDonID(@Param("hoadonID") Integer hoadonID);
*/

		//GET MON AN NAME
		
	
		@Modifying
	    @Query(value = "select * from hoadonchitiet where status = :status", nativeQuery = true)
	    @Transactional
		public List<HoaDonChiTiet> GetHDCTByStatus(@Param("status") String status);
		   
		public default List<HoaDonChiTiet> GetUncompletedHDCT() {
			List<HoaDonChiTiet> list=new ArrayList<HoaDonChiTiet>();
			for (HoaDonChiTiet o : this.findAll()) {
				if(!o.getStatus().equals("completed")) {
					list.add(o);
				}
			}
			return list;
		}

		@Modifying
	    @Query(value = "update hoadonchitiet set status = :status where hoadon_id = :hoaDonId and monan_id = :monAnId", nativeQuery = true)
	    @Transactional
		void UpdateHDCTStatus(
			@Param("status") String status, 
			@Param("hoaDonId") Long hoaDonId, 
			@Param("monAnId") Long monAnId);
		   
}
