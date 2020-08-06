package com.example.demo.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Null;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity(name = "MonAn")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "monan")
public class MonAn implements Serializable{
	     
		 private static final long serialVersionUID = 1L;
		 @Id
		 @GeneratedValue(strategy = GenerationType.IDENTITY)
		
		 @Column(name = "id")
		 private long id;
		 
		 @Column(name="no")
		 private String no;
		 
		 @Column(name = "name")
		 private String name;
	
		 @Column(name = "price")
		 private String price;
		 
		 @Column(name = "unit")
		 private String unit;
		 
		 @Column(name="image")
		 private String image;
		 
		 @Column(name = "loaimonan_id")
		 private int loaimonan_id;
		 
		
		 @OneToMany(
			        mappedBy = "monan",
			        cascade = CascadeType.ALL,
			        orphanRemoval = true
				)
		 private List<MonAnChiTiet> nguyenlieus = new ArrayList<>();
		 
		 @Transient
		 private String tenloaimonan;
		  
		 @Column(name="is_active")
		 private Integer isActive;
		 
		 @Column(name="description")
		 private String description;
		 
		 @Column(name="status")
		 private String status;
		
		
		 public MonAn(long id, String no, String name, String price, String unit, String image, int loaimonan_id,
				List<MonAnChiTiet> nguyenlieus, String tenloaimonan, Integer isActive, String description,
				String status) {
			super();
			this.id = id;
			this.no = no;
			this.name = name;
			this.price = price;
			this.unit = unit;
			this.image = image;
			this.loaimonan_id = loaimonan_id;
			this.nguyenlieus = nguyenlieus;
			this.tenloaimonan = tenloaimonan;
			this.isActive = isActive;
			this.description = description;
			this.status = status;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public MonAn(long id, String no, String name, String price, String unit, String image, int loaimonan_id,
				List<MonAnChiTiet> nguyenlieus, String tenloaimonan, Integer isActive, String description) {
			super();
			this.id = id;
			this.no = no;
			this.name = name;
			this.price = price;
			this.unit = unit;
			this.image = image;
			this.loaimonan_id = loaimonan_id;
			this.nguyenlieus = nguyenlieus;
			this.tenloaimonan = tenloaimonan;
			this.isActive = isActive;
			this.description = description;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public Integer getIsActive() {
			return isActive;
		}

		public void setIsActive(Integer isActive) {
			this.isActive = isActive;
		}

		public MonAn(long id, String no, String name, String price, String unit, String image, int loaimonan_id,
				List<MonAnChiTiet> nguyenlieus, String tenloaimonan, Integer isactive) {
			super();
			this.id = id;
			this.no = no;
			this.name = name;
			this.price = price;
			this.unit = unit;
			this.image = image;
			this.loaimonan_id = loaimonan_id;
			this.nguyenlieus = nguyenlieus;
			this.tenloaimonan = tenloaimonan;
			this.isActive = isactive;
		}

		public MonAn(String no, String name, String price, String unit, String status, String image, int loaimonan_id) {
			super();
			this.no = no;
			this.name = name;
			this.price = price;
			this.unit = unit;
			this.image = image;
			this.loaimonan_id = loaimonan_id;
		}
		 
		 

		public MonAn(String name, String price, String unit, String status, int loaimonan_id) {
			super();
			this.name = name;
			this.price = price;
			this.unit = unit;
			this.loaimonan_id = loaimonan_id;
		}
		


		public MonAn() {
			super();
		}

		

		public long getId() {
			return id;
		}



		public void setId(long id) {
			this.id = id;
		}



		public String getNo() {
			return no;
		}



		public void setNo(String no) {
			this.no = no;
		}



		public String getName() {
			return name;
		}



		public void setName(String name) {
			this.name = name;
		}



		public String getPrice() {
			return price;
		}



		public void setPrice(String price) {
			this.price = price;
		}



		public String getUnit() {
			return unit;
		}



		public void setUnit(String unit) {
			this.unit = unit;
		}

		public String getImage() {
			return image;
		}



		public void setImage(String image) {
			this.image = image;
		}



		public int getLoaimonan_id() {
			return loaimonan_id;
		}



		public void setLoaimonan_id(int loaimonan_id) {
			this.loaimonan_id = loaimonan_id;
		}



		public List<MonAnChiTiet> getNguyenlieus() {
			return nguyenlieus;
		}



		public void setNguyenlieus(List<MonAnChiTiet> nguyenlieus) {
			this.nguyenlieus = nguyenlieus;
		}



		public String getTenloaimonan() {
			return tenloaimonan;
		}



		public void setTenloaimonan(String tenloaimonan) {
			this.tenloaimonan = tenloaimonan;
		}



		@Override
		    public boolean equals(Object o) {
		        if (this == o) return true;
		 
		        if (o == null || getClass() != o.getClass())
		            return false;
		 
		        MonAn monan = (MonAn) o;
		        return Objects.equals(this.name, monan.name);
		    }
		 
		    @Override
		    public int hashCode() {
		        return Objects.hash(this.name);
		    }
}
