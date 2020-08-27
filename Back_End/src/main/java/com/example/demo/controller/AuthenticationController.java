package com.example.demo.controller;

import com.example.demo.config.JwtTokenUtil;
import com.example.demo.model.*;
import com.example.demo.service.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/token")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
 
    @Autowired
    private NhanVienService nhanvienService;

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ApiResponse<AuthToken> register(@RequestBody LoginUser loginUser) throws AuthenticationException {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));
        final NhanVien nhanvien = nhanvienService.findOne(loginUser.getUsername());
        if(nhanvien.getIsactive() == 0) {
            return new ApiResponse<>(300, "User deactive",null);
        }
        final String token = jwtTokenUtil.generateToken(nhanvien);
        return new ApiResponse<>(200, "success",new AuthToken(token));
    }

}
