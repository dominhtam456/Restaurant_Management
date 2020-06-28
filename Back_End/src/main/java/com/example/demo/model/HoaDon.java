package com.example.demo.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Table(name = "hoadon")
public class HoaDon implements Serializable {
	private static final long serialVersionUID = 1L;

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
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

	@OneToMany(
			        mappedBy = "id.hoadonId",
			        //cascade = CascadeType.MERGE,
			        orphanRemoval = true
				)
	private List<InvoiceStaff> nhanvien = new ArrayList<>();


	@OneToMany(
			        mappedBy = "id.hoadonId",
			        //cascade = CascadeType.MERGE,
			        orphanRemoval = true
				)
	private List<HoadonBan> ban = new ArrayList<>();
	
	@javax.persistence.Transient
	private Integer tongTien=0;

	public HoaDon(String no, Date date, Boolean status, String tax, Integer khachhang_id,
		Integer nhanvien_id) {
		super();
		this.no = no;
		this.date = date;
		this.status = status;
		this.tax = tax;
		this.khachhang_id = khachhang_id;
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

	public Integer getTongTien() {
		return tongTien;
	}

	public void setTongTien(Integer tongTien) {
		this.tongTien = tongTien;
	}

	public List<HoadonBan> getBan() {
		return ban;
	}

	public void setBan(List<HoadonBan> ban) {
		this.ban = ban;
	}

	public HoaDon(Long id, String no, Date date, Boolean status, String tax, Integer khachhang_id, Integer nhanvien_id,
			List<HoadonBan> ban) {
		this.id = id;
		this.no = no;
		this.date = date;
		this.status = status;
		this.tax = tax;
		this.khachhang_id = khachhang_id;
		this.ban = ban;
	}

	public List<InvoiceStaff> getNhanvien() {
		return nhanvien;
	}

	public void setNhanvien(List<InvoiceStaff> nhanvien) {
		this.nhanvien = nhanvien;
	}

	public HoaDon(String no, Date date, Boolean status, String tax, Integer khachhang_id, List<InvoiceStaff> nhanvien,
			List<HoadonBan> ban) {
		this.no = no;
		this.date = date;
		this.status = status;
		this.tax = tax;
		this.khachhang_id = khachhang_id;
		this.nhanvien = nhanvien;
		this.ban = ban;
	}

	public HoaDon(Date date, Boolean status, String tax, List<InvoiceStaff> nhanvien,
			List<HoadonBan> ban) {
		this.date = date;
		this.status = status;
		this.tax = tax;
		this.nhanvien = nhanvien;
		this.ban = ban;
	}

	public HoaDon(String no, Date date, Boolean status, String tax, Integer khachhang_id) {
		this.no = no;
		this.date = date;
		this.status = status;
		this.tax = tax;
		this.khachhang_id = khachhang_id;
	}

	
	
}
