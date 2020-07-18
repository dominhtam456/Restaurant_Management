package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.model.Notice;
import com.example.demo.model.NoticeId;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeService extends JpaRepository<Notice, NoticeId>{
    @Modifying
    @Query(value = "update thongbao set status = :status where hoadon_id = :hoadonId and monan_id = :monanId", nativeQuery = true)
    @Transactional
    void UpdateStatusNotice(@Param("status") String status,@Param("hoadonId") Integer hoadonId, @Param("monanId") Integer monanId);

    @Modifying
    @Query(value = "select * from thongbao where status = :status", nativeQuery = true)
    @Transactional
    List<Notice> findByStatus(@Param("status") String status);
}