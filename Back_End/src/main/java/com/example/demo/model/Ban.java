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
/*
 * @NamedStoredProcedureQueries({
 * 
 * @NamedStoredProcedureQuery(name = "firstProcedure", procedureName =
 * "SP_GETALLBANS", resultClasses = Ban.class), })
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "ban")

public class Ban implements Serializable {

	private static final long serialVersionUID = 1L;
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "id")
	 private long id;
	
	 @Column(name = "name")
	 private String name;
	
	 @Column(name = "status")
	 private String status;
	 
	 @Column(name = "is_active")
	 private Integer isActive;

	 @Column(name = "color")
	 private String color;
	 
	protected Ban() {
		  
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	


	public Integer getIsActive() {
		return isActive;
	}

	public void setIsActive(Integer isActive) {
		this.isActive = isActive;
	}

	public Ban(long id, String name, String status, Integer isActive) {
		super();
		this.id = id;
		this.name = name;
		this.status = status;
		this.isActive = isActive;
	}

	public Ban(String name, String status) {
		super();
		this.name = name;
		this.status = status;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Ban(long id, String name, String status, Integer isActive, String color) {
		this.id = id;
		this.name = name;
		this.status = status;
		this.isActive = isActive;
		this.color = color;
	}
	 
	

	
}
