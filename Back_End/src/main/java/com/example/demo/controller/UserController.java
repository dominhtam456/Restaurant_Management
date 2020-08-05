package com.example.demo.controller;

import com.example.demo.model.ApiResponse;
import com.example.demo.model.NhanVien;
import com.example.demo.model.NhanVienDto;
import com.example.demo.service.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

import javax.websocket.server.PathParam;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {
   
    @Autowired
    private NhanVienService nhanvienService;
    
    @PostMapping
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public ApiResponse<NhanVien> saveNhanVien(@RequestBody NhanVienDto nhanvien){
        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",nhanvienService.saveNhanVien(nhanvien));
    }

    @GetMapping
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public ApiResponse<List<NhanVien>> listNhanVien(){
        return new ApiResponse<>(HttpStatus.OK.value(), "User list fetched successfully.",nhanvienService.findAll());
    }

    @GetMapping("/isValid")
    public ApiResponse<Boolean> checkValid(){
        return new ApiResponse<>(HttpStatus.OK.value(), "success.",true);
    }

    @GetMapping("/{id}")
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public ApiResponse<NhanVien> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",nhanvienService.findById(id));
    }

    @GetMapping("/email/{username}")
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public NhanVien getByUsername(@PathVariable String username){
        return nhanvienService.findOne(username);
    }

    @PutMapping("/{id}")
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public ApiResponse<NhanVienDto> update(@RequestBody NhanVienDto nhanvienDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User updated successfully.",nhanvienService.updateNhanVien(nhanvienDto));
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public ApiResponse<Void> delete(@PathVariable int id) {
        nhanvienService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }
    
    @DeleteMapping("/email/{email}")
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public Boolean delete(@PathVariable String email) {
        nhanvienService.findOne(email);
        return true;
    }
    
    

}
