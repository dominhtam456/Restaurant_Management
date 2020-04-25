package com.example.demo.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.HoaDonChiTiet;
import com.example.demo.model.HoaDonChiTietID;
@Repository
public interface ThongKeService extends JpaRepository<HoaDonChiTiet, HoaDonChiTietID> {
	
	 @Query(value="SELECT * FROM Hoadonchitiet INNER JOIN Monan ON Hoadonchitiet.monan_id=Monan.id", nativeQuery = true)
	    List<HoaDonChiTiet> TK();
	    
}
