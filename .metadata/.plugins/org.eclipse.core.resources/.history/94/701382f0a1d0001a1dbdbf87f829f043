package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "nhanvien")
public class NhanVien implements Serializable {

	private static final long serialVersionUID = 1L;
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "id")
	 private int id;
	 
	 @Column(name="no")
	 private String no;
	 
	 @Column(name = "name")
	 private String fullname;
	
	 @Column(name = "phone")
	 private String phone;
	 
	 @Column(name = "email")
	 private String username;
	 
	 @Column(name="password")
	 @JsonIgnore
	 private String password;
	 
	 @Column(name="loai")
	 private int loai;
	 
	 @Column(name="image")
	 private String img;
	 
	 @Column(name="is_active")
	 private Integer isActive; 

	public NhanVien() {
		 
	 }
			
	 public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getLoai() {
		return loai;
	}

	public void setLoai(int loai) {
		this.loai = loai;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	 
	public int getIsactive() {
		return isActive;
	}

	public void setIsactive(Integer isactive) {
		this.isActive = isactive;
	}

	public NhanVien(int id, String no, String fullname, String phone, String username, String password, int loai,
			String img, Integer isactive) {
		super();
		this.id = id;
		this.no = no;
		this.fullname = fullname;
		this.phone = phone;
		this.username = username;
		this.password = password;
		this.loai = loai;
		this.img = img;
		this.isActive = isactive;
	}
}
