package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class InvoiceStaffID implements Serializable{
    private static final long serialVersionUID = 1L;
	
	 @Column(name = "hoadon_id")
	 private Long hoadonId;
	 
	 @Column(name = "nhanvien_id")
     private Long nhanvienId;

     
     public InvoiceStaffID() {

    }

    public InvoiceStaffID(Long hoadonId, Long nhanvienId) {
        this.hoadonId = hoadonId;
        this.nhanvienId = nhanvienId;
    }

    public Long getHoadonId() {
        return hoadonId;
    }

    public void setHoadonId(Long hoadonId) {
        this.hoadonId = hoadonId;
    }

    public Long getNhanvienId() {
        return nhanvienId;
    }

    public void setNhanvienId(Long nhanvienId) {
        this.nhanvienId = nhanvienId;
    }

    
     
}