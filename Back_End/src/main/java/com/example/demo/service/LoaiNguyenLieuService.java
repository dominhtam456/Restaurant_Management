package com.example.demo.service;

import com.example.demo.model.LoaiNguyenLieu;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
 
@Repository
public interface LoaiNguyenLieuService extends JpaRepository<LoaiNguyenLieu, Long>{
	//todo
}
