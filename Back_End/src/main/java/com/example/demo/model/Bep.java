package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Table(name = "bep")
public class Bep implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@EmbeddedId
	@Id
    private BepID id;
	
	@Column(name = "status")
	private int status;

	public Bep(BepID id, int status) {
		super();
		this.id = id;
		this.status = status;
	}

	public BepID getId() {
		return id;
	}

	public void setId(BepID id) {
		this.id = id;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	
	
	
}
