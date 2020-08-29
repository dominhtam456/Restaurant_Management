package com.example.demo.service;

import com.example.demo.model.LoaiNguyenLieu;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
 
 
@Repository
public interface LoaiNguyenLieuService extends JpaRepository<LoaiNguyenLieu, Long>{
	@Query(value = "select * FROM loainguyenlieu WHERE is_active = :isActive", nativeQuery = true)
	public List<LoaiNguyenLieu> listAllByStatus(@Param("isActive") int isActive);
	
	@Query(value = "select * FROM loainguyenlieu WHERE is_active in (:isActive) order by is_active desc", nativeQuery = true)
	public List<LoaiNguyenLieu> filterLNL(@Param("isActive") List<String> isActive);
}
