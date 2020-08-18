package com.example.demo.model;

public class NoticeDTO {
    private Integer id;
    private Integer hoadon_id;
    private Integer monan_id;
    private String description;
    private String status;

    public Integer getHoadon_id() {
        return hoadon_id;
    }

    public void setHoadon_id(Integer hoadon_id) {
        this.hoadon_id = hoadon_id;
    }

    public Integer getMonan_id() {
        return monan_id;
    }

    public void setMonan_id(Integer monan_id) {
        this.monan_id = monan_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public NoticeDTO() {
    }

    public NoticeDTO(Integer hoadon_id, Integer monan_id, String description, String status) {
        this.hoadon_id = hoadon_id;
        this.monan_id = monan_id;
        this.description = description;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public NoticeDTO(Integer id, Integer hoadon_id, Integer monan_id, String description, String status) {
        this.id = id;
        this.hoadon_id = hoadon_id;
        this.monan_id = monan_id;
        this.description = description;
        this.status = status;
    }

    
}