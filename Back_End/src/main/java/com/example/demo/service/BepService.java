package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Bep;
import com.example.demo.model.BepID;

@Repository
public interface BepService extends JpaRepository<Bep,BepID> {
	// GET BEP BY BEPID
	public default List<Bep> getBepByBep_ID(int bepid){
		List<Bep> l = new ArrayList<Bep>();
		for (Bep b : this.findAll()) {
			if(bepid==b.getId().getId()) {
				l.add(b);
			}
		}
		return l;
	}

}
