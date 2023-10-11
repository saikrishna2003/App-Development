package com.kidszone.controller;

import com.kidszone.entity.Books;
import com.kidszone.entity.Education;
import com.kidszone.repository.EducationRepository;
import com.kidszone.service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/education")
public class EducationController {
    @Autowired
    EducationService educationservice;

    @Autowired
    EducationRepository eduRepo;

    public List<Education> getDetails()
    {
        return educationservice.getDetails();
    }

    @PostMapping("/post")
    public String postDetails(@RequestBody Education m1) {
        return educationservice.postDetails(m1);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteDetails(@PathVariable("id") Long id)
    {
        return educationservice.deleteDetails(id);
    }


}
