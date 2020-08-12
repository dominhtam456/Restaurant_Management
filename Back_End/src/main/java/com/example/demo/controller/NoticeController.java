package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.model.Notice;
import com.example.demo.model.NoticeDTO;
import com.example.demo.service.NoticeService;
import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class NoticeController {

    @Autowired
    NoticeService noticeService;

    @RequestMapping(path = "/updateStatusNotice", method = RequestMethod.POST)
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public Boolean UpdateStatusNotice(
            @RequestParam(value = "hoadonId") Integer hoadonId,
            @RequestParam(value = "monanId") Integer monanId,
            @RequestParam(value = "status") String status) {
        // This returns a JSON or XML with the users
        try{
            noticeService.UpdateStatusNotice(status, hoadonId, monanId);
            return true;
        }catch(Exception ex){
            return false;
        }
    }

    @RequestMapping(path = "/notice/{status}", method = RequestMethod.GET)
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public List<NoticeDTO> GetNoticeByStatus(@PathVariable("status") String status){
        List<Notice> list = noticeService.findByStatus(status);
        List<NoticeDTO> response = new ArrayList<>();
        for (Notice notice : list) {
            NoticeDTO o = new NoticeDTO(
                notice.getNoticeId().getHoadon_id(),
                notice.getNoticeId().getMonan_id(),
                notice.getDescription(),
                notice.getStatus());
            response.add(o);
        }
        return response;
    }

    @RequestMapping(value = "/addNotice", method = RequestMethod.POST, 
        produces = MediaType.APPLICATION_JSON_VALUE,
        consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("@appAuthorizer.authorize(authentication, 'VIEW', this)")
    public Notice addNotice(@RequestBody Notice notice) {
        try {
            return noticeService.save(notice);
        } catch (Exception e) {
            return null;
        }
    }
}