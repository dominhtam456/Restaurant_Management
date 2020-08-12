package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Embeddable
public class HoaDonChiTietID implements Serializable{

	private static final long serialVersionUID = 1L;

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "hoadon_id")
	private Integer hoadon_id;
	
	@Column(name = "monan_id")
	private Integer monan_id;

	public HoaDonChiTietID(Integer hoadon_id, Integer monan_id) {
		super();
		this.hoadon_id = hoadon_id;
		this.monan_id = monan_id;
	}

	public HoaDonChiTietID() {
		super();
	}

	public Integer getHoadon_id() {
		return hoadon_id;
	}

	public void setHoadon_id(Integer hoadon_id) {
		this.hoadon_id = hoadon_id;
	}

	public Integer getMonan_id() {
		return monan_id;
	}

	public void setMonan_id(Integer monan_id) {
		this.monan_id = monan_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public HoaDonChiTietID(Integer id, Integer hoadon_id, Integer monan_id) {
		this.id = id;
		this.hoadon_id = hoadon_id;
		this.monan_id = monan_id;
	}
	
	
	
	
	
 
}
