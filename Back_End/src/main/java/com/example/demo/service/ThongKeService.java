package com.example.demo.service;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.HoaDon;
import com.example.demo.model.HoaDonChiTiet;
import com.example.demo.model.HoaDonChiTietID;
import com.example.demo.model.ThongKeDTO;
@Repository
public interface ThongKeService extends JpaRepository<HoaDonChiTiet, HoaDonChiTietID> {
	
	 @Query(value="SELECT * FROM Hoadonchitiet INNER JOIN Monan ON Hoadonchitiet.monan_id=Monan.id", nativeQuery = true)
	List<HoaDonChiTiet> TK();
	 
//	 @Query(value="select hoadon.date as date ,sum(price*soluong) as sum from hoadonchitiet join hoadon on hoadon_id = hoadon.id group by hoadon.date", nativeQuery = true)
//	 List<ThongKeDTO> TKtheoNgay();
	 
	 @Query(value="select new com.example.demo.model.ThongKeDTO(hd.date ,sum(hc.price*hc.soluong)) from HoaDonChiTiet hc join HoaDon hd on hd.id = hc.hoadonchitiet_id.hoadon_id where hd.date between :fromDate and :toDate group by hd.date")
	 List<ThongKeDTO> TKtheoNgay(@Param("fromDate") Date fromDate,@Param("toDate") Date toDate);

//	 @Query(value="select hoadon.date, sum(price*soluong) as  Tong from hoadonchitiet join hoadon on hoadon_id = hoadon.id where hoadon.date between :fromDate and :toDate group by hoadon.date", nativeQuery = true)
//	 List<HoaDonChiTietID> TKtheoNgay(@Param("fromDate") Date fromDate,@Param("toDate") Date toDate);
}

