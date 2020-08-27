package com.example.demo.model;

import java.util.Date;

public class ThongKeDTO {
	private Date date;
	private long sum;
	
	public ThongKeDTO() {
		
	}
	public ThongKeDTO(Date date, long sum) {
		super();
		this.date = date;
		this.sum = sum;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public long getSum() {
		return sum;
	}
	public void setSum(long sum) {
		this.sum = sum;
	}
}
