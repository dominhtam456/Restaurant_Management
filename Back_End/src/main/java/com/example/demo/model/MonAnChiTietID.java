package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class MonAnChiTietID implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	 @Column(name = "monan_id")
	 private Long monan_id;
	 
	 @Column(name = "nguyenlieu_id")
	 private Long nguyenlieu_id;
	 
	
	
	public MonAnChiTietID(Long monan_id, Long nguyenlieu_id) {
		super();
		this.monan_id = monan_id;
		this.nguyenlieu_id = nguyenlieu_id;
	}

	
	
	public MonAnChiTietID() {
		super();
	}



	public Long getMonan_id() {
		return monan_id;
	}



	public void setMonan_id(Long monan_id) {
		this.monan_id = monan_id;
	}



	public Long getNguyenlieu_id() {
		return nguyenlieu_id;
	}



	public void setNguyenlieu_id(Long nguyenlieu_id) {
		this.nguyenlieu_id = nguyenlieu_id;
	}



	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
 
        if (o == null || getClass() != o.getClass())
            return false;
 
        MonAnChiTietID that = (MonAnChiTietID) o;
        return Objects.equals(monan_id, that.monan_id) &&
               Objects.equals(nguyenlieu_id, that.nguyenlieu_id);
    }
	
	@Override
    public int hashCode() {
        return Objects.hash(monan_id, nguyenlieu_id);
    }
}
