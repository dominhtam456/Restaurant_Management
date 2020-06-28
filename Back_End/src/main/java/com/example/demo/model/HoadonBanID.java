package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Embeddable
public class HoadonBanID implements Serializable{
    private static final long serialVersionUID = 1L;
    
     @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "hoadon_id")
	 private Long hoadonId;
	 
	 @Column(name = "ban_id")
     private Long banId;

     public HoadonBanID() {
     }

     public HoadonBanID(Long hoadonId, Long banId) {
         this.hoadonId = hoadonId;
         this.banId = banId;
     }

	public Long getHoadonId() {
		return hoadonId;
	}

	public void setHoadonId(Long hoadonId) {
		this.hoadonId = hoadonId;
	}

	public Long getBanId() {
		return banId;
	}

	public void setBanId(Long banId) {
		this.banId = banId;
	}

     

     
}