package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BepID implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Column(name = "monan_id")
	private Integer monan_id;
	
	@Column(name = "hoadon_id")
	private Integer hoadon_id;

	public BepID(Integer monan_id, Integer hoadon_id) {
		super();
		this.monan_id = monan_id;
		this.hoadon_id = hoadon_id;
	}

	public Integer getMonan_id() {
		return monan_id;
	}

	public void setMonan_id(Integer id) {
		this.monan_id = id;
	}

	public Integer getHoadon_id() {
		return hoadon_id;
	}

	public void setHoadon_id(Integer hoadon_id) {
		this.hoadon_id = hoadon_id;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
	
}
