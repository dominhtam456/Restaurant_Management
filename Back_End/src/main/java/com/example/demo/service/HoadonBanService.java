package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.model.HoadonBan;
import com.example.demo.model.HoadonBanID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HoadonBanService extends JpaRepository<HoadonBan, HoadonBanID>{
    @Modifying
    @Query(value = "select * from hoadon_ban where hoadon_id = :id", nativeQuery = true)
    @Transactional
    public List<HoadonBan> Get(@Param("id") Integer id);
}