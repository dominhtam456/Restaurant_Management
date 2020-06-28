package com.example.demo.service;

import com.example.demo.model.HoadonBan;
import com.example.demo.model.HoadonBanID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HoadonBanService extends JpaRepository<HoadonBan, HoadonBanID>{
    
}