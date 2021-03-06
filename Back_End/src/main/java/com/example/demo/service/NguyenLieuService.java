package com.example.demo.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.NguyenLieu;
 
 
@Repository
public interface NguyenLieuService extends JpaRepository<NguyenLieu, Long>{
	@Query("FROM NguyenLieu WHERE name LIKE %:keyword%")
	public List<NguyenLieu> TimNguyenLieuTheoTen(@Param("keyword") String keyword);
	
	@Query(value = "select * FROM NguyenLieu WHERE is_active in (:isActive) order by is_active desc", nativeQuery=true)
	public List<NguyenLieu> filterNL(@Param("isActive") List<String> isActive);
	
	//GET DANH SACH NGUYEN LIEU
		public default List<NguyenLieu> GetAllNguyenLieu(){
			return this.findAll();
		}
		
	//GET 1 NGUYEN LIEU
		public default NguyenLieu GetNguyenLieu(long id) {
			return this.getOne(id);
			
		}
	
	//INSERT NGUYENLIEU
		public default NguyenLieu InsertNguyenLieu(NguyenLieu nl) {
			if(nl!=null) {
				return this.save(nl);
			}else {
				return null;
			}
		}
		
	//UPDATE BAN
		public default boolean UpdateNguyenLieu(NguyenLieu nl) {
			NguyenLieu temp=this.getOne(nl.getId());
			if(temp!=null) {
				temp.setNo(nl.getNo());
				temp.setName(nl.getName());
				temp.setPrice(nl.getPrice());
				temp.setDate(nl.getDate());
				temp.setImage(nl.getImage());
				temp.setLoainguyenlieu_id(nl.getLoainguyenlieu_id());
				temp.setIsActive(nl.getIsActive());
				this.save(temp);
				return true;
			}else {
				return false;
			}
		}
}
