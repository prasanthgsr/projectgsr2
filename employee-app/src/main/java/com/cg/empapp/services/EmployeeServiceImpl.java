package com.cg.empapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.empapp.dao.EmployeeDAO;
import com.cg.empapp.entities.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	
	@Autowired private EmployeeDAO dao;
	@Override
	public void save(Employee emp) {
		// TODO Auto-generated method stub
		dao.save(emp);
		
	}

	@Override
	public Employee findById(Integer id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		dao.delete(id);
	}

	@Override
	public void update(Employee emp) {
		// TODO Auto-generated method stub
		dao.update(emp);
	}

}
