package com.example.demo.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.LoaiMonAn;

@Repository
public interface LoaiMonAnService extends JpaRepository<LoaiMonAn, Long> {
	@Query(value = "select * FROM loaimonan WHERE is_active = :isActive", nativeQuery = true)
	public List<LoaiMonAn> listTypeFoodByStatus(@Param("isActive") int isActive);
	
	@Query(value = "select * FROM loaimonan WHERE is_active in (:isActive) order by is_active desc", nativeQuery = true)
	public List<LoaiMonAn> listTypeFoodFliter(@Param("isActive") List<String> isActive);
}
