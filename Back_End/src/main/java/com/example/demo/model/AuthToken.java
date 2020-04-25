package com.example.demo.model;

public class AuthToken {

    private String token;
    private String username;
    private int role;

    public AuthToken(){

    }
    
    
    
    public int getRole() {
		return role;
	}



	public void setRole(int role) {
		this.role = role;
	}



	public AuthToken(String token, String username, int role){
        this.token = token;
        this.username = username;
        this.role = role;
    }
	
	

    public AuthToken(String token, String username) {
		super();
		this.token = token;
		this.username = username;
	}



	public AuthToken(String token){
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
