package com.example.demo.service;

import com.example.demo.model.MonAnChiTiet;
import com.example.demo.model.MonAnChiTietID;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonAnChiTietService extends JpaRepository<MonAnChiTiet, MonAnChiTietID> {
	
		// Get All MonAnChiTiet
		public default List<MonAnChiTiet> GetAllMonAnChiTiets() {
			return this.findAll();
		}
		
			
		// Get MonAnChiTiet By MonAnID
		public default List<MonAnChiTiet> GetMonAnChiTietByMonAnID(int monanID) {
			List<MonAnChiTiet> list = new ArrayList<MonAnChiTiet>();
			for (MonAnChiTiet o : this.findAll()) {
				if(o.getId().getMonan_id() == monanID) {
					list.add(o);
				}
			}
			return list;
		}
		
		// Insert MonAnChiTiet
		public default MonAnChiTiet InSertMACT(MonAnChiTiet o) {
			if (o != null) 
			{
				return save(o);
				
			} 
			else 
			{
				return null;
			}

		}
		
		// Delete MonAnChiTiet
		public default boolean DeleteMACT(MonAnChiTietID mactID) {
			if (mactID != null) 
			{
				this.deleteById(mactID);
				return true;
			} 
			else 
			{
				return false;
			}

		}
				
}
