package com.cg.models;
import javax.validation.constraints.*;
public class Customer {
	
	@NotNull(message="Please enter Customer Id")
	private Integer customerId;
	
	@NotEmpty(message="Please enter first name")
	@Size(min=3, max=20, message="Must contains atleast 3 ")
	private String firstname;
	private String lastname;
	private String address;
	
	@Email(message="Invalid email address")
	private String email;
	public Integer getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	

}
