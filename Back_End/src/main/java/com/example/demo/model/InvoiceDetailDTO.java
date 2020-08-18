package com.example.demo.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class InvoiceDetailDTO implements Serializable{
    private static final long serialVersionUID = 1L;
    private Integer id;
    private Integer monan_id;
    private Integer hoadon_id;
    private Integer soluong;
    private String status;
    private String tenMonAn;
    private String comment;
    private List<HoadonBan> ban = new ArrayList<>();

    

    public Integer getMonan_id() {
        return monan_id;
    }

    public void setMonan_id(Integer monan_id) {
        this.monan_id = monan_id;
    }

    public Integer getHoadon_id() {
        return hoadon_id;
    }

    public void setHoadon_id(Integer hoadon_id) {
        this.hoadon_id = hoadon_id;
    }

    public Integer getSoluong() {
        return soluong;
    }

    public void setSoluong(Integer soluong) {
        this.soluong = soluong;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTenMonAn() {
        return tenMonAn;
    }

    public void setTenMonAn(String tenMonAn) {
        this.tenMonAn = tenMonAn;
    }

    public List<HoadonBan> getBan() {
        return ban;
    }

    public void setBan(List<HoadonBan> ban) {
        this.ban = ban;
    }

    public InvoiceDetailDTO(Integer monan_id, Integer hoadon_id, Integer soluong, String status, String tenMonAn,
            List<HoadonBan> ban) {
        this.monan_id = monan_id;
        this.hoadon_id = hoadon_id;
        this.soluong = soluong;
        this.status = status;
        this.tenMonAn = tenMonAn;
        this.ban = ban;
    }

    public InvoiceDetailDTO() {
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public InvoiceDetailDTO(Integer monan_id, Integer hoadon_id, Integer soluong, String status, String tenMonAn,
            String comment, List<HoadonBan> ban) {
        this.monan_id = monan_id;
        this.hoadon_id = hoadon_id;
        this.soluong = soluong;
        this.status = status;
        this.tenMonAn = tenMonAn;
        this.comment = comment;
        this.ban = ban;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public InvoiceDetailDTO(Integer id, Integer monan_id, Integer hoadon_id, Integer soluong, String status,
            String tenMonAn, String comment, List<HoadonBan> ban) {
        this.id = id;
        this.monan_id = monan_id;
        this.hoadon_id = hoadon_id;
        this.soluong = soluong;
        this.status = status;
        this.tenMonAn = tenMonAn;
        this.comment = comment;
        this.ban = ban;
    }

    
}