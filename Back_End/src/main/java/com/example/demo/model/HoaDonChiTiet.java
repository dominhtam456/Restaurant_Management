package com.example.demo.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "hoadonchitiet")

public class HoaDonChiTiet implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	@Id
    private HoaDonChiTietID hoadonchitiet_id;

	@Column(name = "price")
	private String price;

	@Column(name = "soluong")
	private Integer soluong;
    
	@Transient
	private String thanhTien;
	
	@Transient
	private String tenMonAn;
	
	//HAM TAO
	
	public HoaDonChiTiet(HoaDonChiTietID hoadonchitiet_id, String price, Integer soluong) {
		super();
		this.hoadonchitiet_id = hoadonchitiet_id;
		this.price = price;
		this.soluong = soluong;
	}

	public HoaDonChiTiet() {
		super();
	}

	public HoaDonChiTietID getHoadonchitiet_id() {
		return hoadonchitiet_id;
	}

	public void setHoadonchitiet_id(HoaDonChiTietID hoadonchitiet_id) {
		this.hoadonchitiet_id = hoadonchitiet_id;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public Integer getSoluong() {
		return soluong;
	}

	public void setSoluong(Integer soluong) {
		this.soluong = soluong;
	}

	//GET TIEN*SOLUONG
	public String getThanhTien() {
		return String.valueOf(Integer.valueOf(this.price)*this.soluong);
	}

	public String getTenMonAn() {
		return tenMonAn;
	}

	public void setTenMonAn(String tenMonAn) {
		this.tenMonAn = tenMonAn;
	}


	
}
