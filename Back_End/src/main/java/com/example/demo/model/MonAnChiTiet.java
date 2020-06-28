package com.example.demo.model;

import java.util.Objects;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "MonAnChiTiet")
@Table(name = "monanchitiet")
public class MonAnChiTiet {
	
	@EmbeddedId
	private MonAnChiTietID id;
	
	@JsonIgnore 
	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("monan_id")
    private MonAn monan;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @MapsId("nguyenlieu_id")
    private NguyenLieu nguyenlieu;
	
	@Column(name="soluong")
	private Float soluong;
	
	
	public MonAnChiTiet() {
		super();
	}
	

	public MonAnChiTiet(MonAn monan, NguyenLieu nguyenlieu, Float soluong) {
		super();
		this.id = new MonAnChiTietID(monan.getId(), nguyenlieu.getId());
		//this.id = id;
		this.monan = monan;
		this.nguyenlieu = nguyenlieu;
		this.soluong = soluong;
	}

	public MonAnChiTietID getId() {
		return id;
	}

	public void setId(MonAnChiTietID id) {
		this.id = id;
	}

	public MonAn getMonan() {
		return monan;
	}

	public void setMonan(MonAn monan) {
		this.monan = monan;
	}

	public NguyenLieu getNguyenlieu() {
		return nguyenlieu;
	}

	public void setNguyenlieu(NguyenLieu nguyenlieu) {
		this.nguyenlieu = nguyenlieu;
	}

	public Float getSoluong() {
		return soluong;
	}

	public void setSoluong(Float soluong) {
		this.soluong = soluong;
	}
	
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
 
        if (o == null || getClass() != o.getClass())
            return false;
 
        MonAnChiTiet that = (MonAnChiTiet) o;
        return Objects.equals(monan, that.monan) &&
               Objects.equals(nguyenlieu, that.nguyenlieu);
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(monan, nguyenlieu);
    }

}
