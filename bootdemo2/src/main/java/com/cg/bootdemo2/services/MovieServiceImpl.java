package com.cg.bootdemo2.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


import com.cg.bootdemo2.dao.MovieDAO;
import com.cg.bootdemo2.entities.Movie;

@Service // Special annotation for Services
@Transactional // Enable Declarative transaction support 
public class MovieServiceImpl implements MovieService {

	@Autowired private MovieDAO dao;
	
	@Transactional
	public void save(Movie m) {
		dao.save(m);
	}

	@Transactional(readOnly=true)
	public Movie findById(Integer id) {
		// TODO Auto-generated method stub
		return dao.findById(id).get();
	}

}