package com.cg.empapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.empapp.entities.Employee;
import com.cg.empapp.services.EmployeeService;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
  
	@Autowired private EmployeeService service;
	
	//test url:http://localhost:8080/employees/1002
	@GetMapping(value="/{id}",produces= {"application/json","application/xml"})
	public Employee search(@PathVariable Integer id) {
		return service.findById(id);
	}


	@PutMapping(value="/update",
            consumes= {"application/json","application/xml"})
public ResponseEntity<String>update(@RequestBody Employee emp){
	service.update(emp);
	
	return new ResponseEntity<String>("Record updated",HttpStatus.OK);
}
	//USE DELETE MAPPING,USE either @REQUESTEDPARAM OR @PATHVARIABLE
	@DeleteMapping(value="/delete")
public ResponseEntity<String>delete(@RequestParam Integer id){
		service.delete(id);
	return new ResponseEntity<String> ("record deleted",HttpStatus.OK);
}
@PostMapping(value="/create",
                consumes= {"application/json","application/xml"})
public ResponseEntity<String> create(@RequestBody Employee emp){
	service.save(emp);
	//Return Response body "Record Created" with response status=201
	return new ResponseEntity<String>("Record Created",HttpStatus.CREATED);
}
}