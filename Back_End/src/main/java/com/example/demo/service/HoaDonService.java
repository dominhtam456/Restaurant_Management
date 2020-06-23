package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.HoaDon;

@Repository
public interface HoaDonService extends JpaRepository<HoaDon,Long>{
	  // private default List<HoaDon> dshd=this.List<HoaDon> findByHOADON_STATUS(Boolean hOADON_STATUS);;
	    @Modifying
	    @Query(value = "insert into hoadon (no) VALUES (:id,:insertLink)", nativeQuery = true)
	    @Transactional
	    void TaoHoaDon(@Param("id") Long id,@Param("insertLink") String insertLink);
  
		//GET DANH SACH HoaDon
		public default List<HoaDon> GetAllHoaDons(){
			return this.findAll();
		}
		
		//GET 1 HoaDOn
		public default HoaDon GetHoaDon(long id) {
			return this.getOne(id);
			
		}
		//get hoa don theo ban va chua thanh toan
		public default List<HoaDon> GetHoaDonToStatus(Boolean status){
			List<HoaDon> list=new ArrayList<HoaDon>();
			for (HoaDon hoaDon : this.findAll()) {
				if(hoaDon.getStatus()==status) {
					list.add(hoaDon);
				}
			}
			return list;
		}
		
		//CREATE HOA DON NO
				public  default String CreateHoaDonNo() {
					Integer maxID=0;
					for (HoaDon o : this.findAll()) {
						if(o.getId()>maxID) {
							maxID=Integer.parseInt(o.getId().toString());
						}
					}
					return "HD00"+(maxID+1);
				}
				//INSERT HoaDon
				@SuppressWarnings("unused")
				public default HoaDon InsertHoaDon(HoaDon o) {
					o.setNo(CreateHoaDonNo());
					//mac dinh khahc hanng le=1
					o.setKhachhang_id(1);
					if(o!=null) {
					   return save(o);
						
					}else {
						return null;
					}
				}
		
		//UPDATE HoaDon
		public default boolean UpdateHoaDon(HoaDon o) {
			HoaDon temp=this.getOne(o.getId());
			temp.setStatus(o.getStatus());
			if(temp!=null) {
				this.save(temp);
				return true;
			}
			return false;
		}
		
		//DELETE HoaDon
		public default boolean 	DeleteHoaDon(long id) {
			HoaDon temp=this.getOne(id);
			if(temp!=null) {
				this.delete(temp);
				return true;
			}else {
				return false;
			}
		}
		
}
