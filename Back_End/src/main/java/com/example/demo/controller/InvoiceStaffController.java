package com.example.demo.controller;

import javax.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.NguyenLieuService;
import com.example.demo.service.LoaiNguyenLieuService;
import com.example.demo.service.InvoiceStaffService;
import com.example.demo.model.InvoiceStaff;
import com.example.demo.model.NguyenLieu;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class InvoiceStaffController {

    @Autowired
    InvoiceStaffService invoiceStaffService;

    @RequestMapping(path = "/GetAllStaffInvoice", produces = MediaType.APPLICATION_JSON_VALUE)
	public java.util.List<InvoiceStaff> getAllNguyenLieu() {
		return invoiceStaffService.findAll();
    }
    
    @RequestMapping(value = "/InsertStaffInvoice", method = RequestMethod.POST, 
        produces = MediaType.APPLICATION_JSON_VALUE,
        consumes = MediaType.APPLICATION_JSON_VALUE)
    public InvoiceStaff insertNguyenLieu(@RequestBody InvoiceStaff invoiceStaff) {
        return invoiceStaffService.save(invoiceStaff);
    }
}