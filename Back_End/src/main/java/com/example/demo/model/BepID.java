package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BepID implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "hoadon_id")
	private Integer hoadon_id;

	public BepID(Integer id, Integer hoadon_id) {
		super();
		this.id = id;
		this.hoadon_id = hoadon_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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
