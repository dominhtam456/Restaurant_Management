package com.example.demo.service;

import com.example.demo.model.InvoiceStaff;
import com.example.demo.model.InvoiceStaffID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceStaffService extends JpaRepository<InvoiceStaff,InvoiceStaffID>{
    
}