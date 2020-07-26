package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Ban;
import com.example.demo.model.HoaDon;
import com.example.demo.model.HoaDonChiTiet;
import com.example.demo.model.HoaDonChiTietID;
import com.example.demo.model.HoadonBan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service(value = "mergeTableSerivce")
public class MergeTableService {

    @Autowired
    private HoaDonService hoaDonService;

    @Autowired
    private HoaDonChiTietService hoaDonChiTietService;

    @Autowired
    private HoadonBanService hoadonBanService;

    @Autowired
    private BanService banService;

    @Transactional
    public void mergeTable(List<Long> listHDId) {
        if(listHDId.size() == 0) return;
        
        HoaDon hd = hoaDonService.getOne(listHDId.get(0));
        List<HoaDonChiTiet> listHDCT = hoaDonChiTietService.GetHoaDonChiTietToHoaDonID(hd.getId().intValue());

        for(int i=1; i<listHDId.size(); i++ ){
            List<HoaDonChiTiet> listHDCT_temp = hoaDonChiTietService.GetHoaDonChiTietToHoaDonID(listHDId.get(i).intValue());

            for(int j=0; j< listHDCT_temp.size(); j++){
                boolean flag = true;
                for(int k =0; k< listHDCT.size(); k++){
                    if(listHDCT_temp.get(j).getHoadonchitiet_id().getMonan_id() == listHDCT.get(k).getHoadonchitiet_id().getMonan_id()){
                        int currentAmount = listHDCT.get(k).getSoluong();
                        int amount = currentAmount + listHDCT_temp.get(j).getSoluong();
                        listHDCT.get(k).setSoluong(amount);
                        flag = false;
                        break;
                    }
                }
                if(flag) {
                    HoaDonChiTietID hdctid = new HoaDonChiTietID(
                        hd.getId().intValue(),
                        listHDCT_temp.get(j).getHoadonchitiet_id().getMonan_id());
                    HoaDonChiTiet hdct = new HoaDonChiTiet(
                        hdctid, 
                        listHDCT_temp.get(j).getPrice(), 
                        listHDCT_temp.get(j).getSoluong(), 
                        listHDCT_temp.get(j).getStatus(), 
                        listHDCT_temp.get(j).getComment());
                    listHDCT.add(hdct);
                }
            }
            hoadonBanService.UpdateHDId(hd.getId().intValue(), listHDId.get(i).intValue());
        }

        for (HoaDonChiTiet hoaDonChiTiet : listHDCT) {
            hoaDonChiTietService.InSertHDCT(hoaDonChiTiet);
        }

        List<HoadonBan> listHDB = hoadonBanService.Get(hd.getId().intValue());
        String color = listHDB.get(0).getBan().getColor();
        for (HoadonBan hoadonBan : listHDB) {
            banService.UpdateColorTable(hoadonBan.getId().getBanId(), color);
        }

        for(int i=1; i<listHDId.size(); i++ ){
            hoaDonService.DeleteHoaDon(listHDId.get(i));
        }

    }
}