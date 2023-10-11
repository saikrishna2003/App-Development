package com.kidszone.service;

import com.kidszone.entity.Books;
import com.kidszone.entity.Education;
import com.kidszone.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class EducationService {
    @Autowired
    EducationRepository educationRepository;
    public List<Education> getDetails()
    {
        return educationRepository.findAll();
    }

    public String postDetails(Education m1)
    {
        educationRepository.save(m1);
        return "Details are saved";
    }

    public String deleteDetails(@PathVariable("id") Long id)
    {
        educationRepository.deleteById(id);
        return "Id : "+id+" is deleted";
    }



}