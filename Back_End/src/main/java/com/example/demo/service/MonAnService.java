package com.example.demo.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.MonAn;

@Repository
public interface MonAnService extends JpaRepository<MonAn, Long>{
	//TIM MON AN THEO TEN
	@Query(value = "select * FROM monan WHERE name LIKE %:keyword%", nativeQuery = true)
	public List<MonAn> TimMonAnTheoTen(@Param("keyword") String keyword);
	

	@Query(value = "select * FROM monan WHERE is_active = :isActive", nativeQuery = true)
	public List<MonAn> GetFoodByStatus(@Param("isActive") int isActive);
	
	@Query(value = "SELECT * FROM monan WHERE is_active in (:isActive) order by is_active desc", nativeQuery = true)
	public List<MonAn> filterMonAn (@Param("isActive") List<String> isActive);

	//GET DANH SACH MON AN
		public default List<MonAn> GetAllMonAn(){
			return this.findAll();
		}
		
	//GET 1 MON AN
		public default MonAn GetMonAn(long id) {
			return this.getOne(id);
			
		}
		
	//INSERT MONAN
		public default MonAn InsertMonAn(MonAn ma) {
			if(ma!=null) {
				return this.save(ma);
			}else {
				return null;
			}
		}
		
	//UPDATE MONAN
		public default boolean UpdateMonAn(MonAn ma) {
			MonAn temp=this.getOne(ma.getId());
			if(temp!=null) {
				temp.setNo(ma.getNo());
				temp.setName(ma.getName());
				temp.setPrice(ma.getPrice());
				temp.setUnit(ma.getUnit());
				temp.setLoaimonan_id(ma.getLoaimonan_id());
				temp.setImage(ma.getImage());
				temp.setIsActive(ma.getIsActive());
				temp.setDescription(ma.getDescription());
				temp.setStatus(ma.getStatus());
				this.save(temp);
				return true;
			}else {
				return false;
			}
		}
		

}
