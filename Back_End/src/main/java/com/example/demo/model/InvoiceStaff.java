package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "nhanvien_hoadon")
public class InvoiceStaff implements Serializable{

    private static final long serialVersionUID = 1L;

    @EmbeddedId
    @Id
    private InvoiceStaffID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("nhanvien_id")
    private NhanVien nhanvien;

    public InvoiceStaff() {
    }

    public InvoiceStaff(InvoiceStaffID id, NhanVien nhanvien) {
        this.id = id;
        this.nhanvien = nhanvien;
    }

    public InvoiceStaffID getId() {
        return id;
    }

    public void setId(InvoiceStaffID id) {
        this.id = id;
    }

    public NhanVien getNhanvien() {
        return nhanvien;
    }

    public void setNhanvien(NhanVien nhanvien) {
        this.nhanvien = nhanvien;
    } 
}