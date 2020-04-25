package com.example.demo.dao;

import com.example.demo.model.NhanVien;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NhanVienDao extends CrudRepository<NhanVien, Integer>{
	
	  NhanVien findByUsername(String username);
}
