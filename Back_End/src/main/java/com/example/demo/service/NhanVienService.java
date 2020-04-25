package com.example.demo.service;

import com.example.demo.model.NhanVien;
import com.example.demo.model.NhanVienDto;

import java.util.List;

public interface NhanVienService {
	
	NhanVien saveNhanVien(NhanVienDto nhanvien);
	
	List<NhanVien> findAll();
	
    void delete(int id);

    NhanVien findOne(String username);

    NhanVienDto updateNhanVien(NhanVienDto nhanvienDto);

	NhanVien findById(long id);

}
