package com.example.demo.model;


import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Table(name = "hoadon")
public class HoaDon implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "no")
	private String no;

	@Column(name = "date")
	private Date date;

	@Column(name = "status")
	private Boolean status;

	@Column(name = "tax")
	private String tax;

	@Column(name = "khachhang_id")
	private Integer khachhang_id;

	@JoinColumn(name = "ban_id")
	private Integer ban_id;

	@JoinColumn(name = "nhanvien_id")
	private Integer nhanvien_id;
	
	@javax.persistence.Transient
	private Integer tongTien=0;

	public HoaDon(String no, Date date, Boolean status, String tax, Integer khachhang_id, Integer ban_id,
			Integer nhanvien_id) {
		super();
		this.no = no;
		this.date = date;
		this.status = status;
		this.tax = tax;
		this.khachhang_id = khachhang_id;
		this.ban_id = ban_id;
		this.nhanvien_id = nhanvien_id;
	}

	public HoaDon() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public String getTax() {
		return tax;
	}

	public void setTax(String tax) {
		this.tax = tax;
	}

	public Integer getKhachhang_id() {
		return khachhang_id;
	}

	public void setKhachhang_id(Integer khachhang_id) {
		this.khachhang_id = khachhang_id;
	}

	public Integer getBan_id() {
		return ban_id;
	}

	public void setBan_id(Integer ban_id) {
		this.ban_id = ban_id;
	}

	public Integer getNhanvien_id() {
		return nhanvien_id;
	}

	public void setNhanvien_id(Integer nhanvien_id) {
		this.nhanvien_id = nhanvien_id;
	}

	public Integer getTongTien() {
		return tongTien;
	}

	public void setTongTien(Integer tongTien) {
		this.tongTien = tongTien;
	}

	
	
}
