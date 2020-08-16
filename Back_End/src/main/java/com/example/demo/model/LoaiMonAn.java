package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "loaimonan")
public class LoaiMonAn implements Serializable {
	
	private static final long serialVersionUID = 1L;
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "id")
	 private long id;
	
	 @Column(name = "name")
	 private String name;
	
	 @Column(name = "description")
	 private String description;
	 
	 @Column(name = "is_active")
	 private Integer isActive;

	public LoaiMonAn(long id, String name, String description, Integer isActive) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.isActive = isActive;
	}

	public Integer getIsActive() {
		return isActive;
	}

	public void setIsActive(Integer isActive) {
		this.isActive = isActive;
	}

	public LoaiMonAn(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}

	public LoaiMonAn() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	 
	 

		 
}
