package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "hoadon_ban")
public class HoadonBan implements Serializable{

    private static final long serialVersionUID = 1L;

    @EmbeddedId
    private HoadonBanID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("ban_id")
    private Ban ban;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("hoadon_id")
    private HoaDon hoadon;

    
    public HoadonBan(HoadonBanID id, Ban ban, HoaDon hoadon) {
        this.id = id;
        this.ban = ban;
        this.hoadon = hoadon;
    }

    public HoadonBanID getId() {
        return id;
    }

    public void setId(HoadonBanID id) {
        this.id = id;
    }

    public Ban getBan() {
        return ban;
    }

    public void setBan(Ban ban) {
        this.ban = ban;
    }

    public HoaDon getHoadon() {
        return hoadon;
    }

    public void setHoadon(HoaDon hoadon) {
        this.hoadon = hoadon;
    }

    public HoadonBan() {
    }

    public HoadonBan(HoadonBanID id) {
        this.id = id;
    }

    

    

    
}