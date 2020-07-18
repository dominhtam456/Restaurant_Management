package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "thongbao")
public class Notice implements Serializable{
    private static final long serialVersionUID = 1L;

    @EmbeddedId
	@Id
    private NoticeId noticeId;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private String status;

    public NoticeId getNoticeId() {
        return noticeId;
    }

    public void setNoticeId(NoticeId noticeId) {
        this.noticeId = noticeId;
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

    public Notice() {
    }

    public Notice(NoticeId noticeId, String description, String status) {
        this.noticeId = noticeId;
        this.description = description;
        this.status = status;
    }

    
}