package com.example.demo.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.NaturalIdCache;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "NguyenLieu")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "nguyenlieu")
@NaturalIdCache
@Cache(
    usage = CacheConcurrencyStrategy.READ_WRITE
)
public class NguyenLieu implements Serializable {

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
		 
		 @Column(name = "date")
		 private Date date;
		 
		 @Column(name="image")
		 private String image;
		 
		 @Column(name = "loainguyenlieu_id")
		 private int loainguyenlieu_id;
		 
		 @Column(name="is_active")
		 private Integer isActive;
		 
		 public Integer getIsActive() {
			return isActive;
		}

		public void setIsActive(Integer isActive) {
			this.isActive = isActive;
		}

		public NguyenLieu(long id, String no, String name, String price, Date date, String image, int loainguyenlieu_id,
				 Integer isactive, String tenloainguyenlieu) {
			super();
			this.id = id;
			this.no = no;
			this.name = name;
			this.price = price;
			this.date = date;
			this.image = image;
			this.loainguyenlieu_id = loainguyenlieu_id;
			this.isActive = isactive;
			this.tenloainguyenlieu = tenloainguyenlieu;
		}

		

		private String tenloainguyenlieu;
		

		public NguyenLieu() {
			super();
		}

		public NguyenLieu(String name, String price, Date date, int loainguyenlieu_id) {
			super();
			this.name = name;
			this.price = price;
			this.date = date;
			this.loainguyenlieu_id = loainguyenlieu_id;
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

		public Date getDate() {
			return date;
		}

		public void setDate(Date date) {
			this.date = date;
		}

		public String getImage() {
			return image;
		}

		public void setImage(String image) {
			this.image = image;
		}

		public int getLoainguyenlieu_id() {
			return loainguyenlieu_id;
		}

		public void setLoainguyenlieu_id(int loainguyenlieu_id) {
			this.loainguyenlieu_id = loainguyenlieu_id;
		}

		public String getTenloainguyenlieu() {
			return tenloainguyenlieu;
		}

		public void setTenloainguyenlieu(String tenloainguyenlieu) {
			this.tenloainguyenlieu = tenloainguyenlieu;
		}

		@Override
		    public boolean equals(Object o) {
		        if (this == o) return true;
		        if (o == null || getClass() != o.getClass()) return false;
		        NguyenLieu nguyenlieu = (NguyenLieu) o;
		        return Objects.equals(name, nguyenlieu.name);
		    }
		 
		    @Override
		    public int hashCode() {
		        return Objects.hash(name);
		    }
}