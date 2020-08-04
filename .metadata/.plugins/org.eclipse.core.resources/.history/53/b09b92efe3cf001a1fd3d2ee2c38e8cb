package com.example.demo.service;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import com.example.demo.model.MonAn;

@Repository
public interface MonAnService extends JpaRepository<MonAn, Long>{
	
	//TIM MON AN THEO TEN
	@Query("FROM MonAn WHERE name LIKE %:keyword%")
	public List<MonAn> TimMonAnTheoTen(@Param("keyword") String keyword);
	
	
}
