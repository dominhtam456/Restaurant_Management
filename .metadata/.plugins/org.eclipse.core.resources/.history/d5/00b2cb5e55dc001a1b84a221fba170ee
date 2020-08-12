package com.example.demo.dao;

import com.example.demo.model.NhanVien;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NhanVienDao extends CrudRepository<NhanVien, Integer>{
	
	  NhanVien findByUsername(String username);
	  
	//TIM MON AN THEO TEN
	@Query("FROM NhanVien WHERE fullname LIKE %:keyword%")
	public List<NhanVien> TimNhanVienTheoTen(@Param("keyword") String keyword);
}
