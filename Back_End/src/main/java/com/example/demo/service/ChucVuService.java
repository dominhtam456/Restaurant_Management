package com.example.demo.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.ChucVu;

public interface ChucVuService extends JpaRepository<ChucVu, Long> {
	public default List<ChucVu> GetAllRole(){
		return this.findAll();
	}
	
}
