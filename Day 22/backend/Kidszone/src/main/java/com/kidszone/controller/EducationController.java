package com.kidszone.controller;

import com.kidszone.entity.Books;
import com.kidszone.entity.BooksCategory;
import com.kidszone.entity.Education;
import com.kidszone.service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
public class EducationController {
    @Autowired
    EducationService s1;

    @GetMapping("/education/get")
    public List<Education> getDetails() {
        return s1.getDetails();
    }

    @GetMapping("/education/{id}")
    public Education getById(@PathVariable Long id) {
        return s1.getById(id);
    }

    @PostMapping("/education/post")
    public String postDetails(@RequestBody Education m1) {
        return s1.postDetails(m1);
    }

    @PutMapping("/education/put/{bid}")
    public Education updateDetails(@RequestBody Education m) {
        return s1.updateDetails(m);
    }

}
