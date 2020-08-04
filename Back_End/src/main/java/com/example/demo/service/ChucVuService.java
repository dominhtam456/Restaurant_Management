package com.example.demo.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ChucVu;

public interface ChucVuService extends JpaRepository<ChucVu, Long> {
	
}
