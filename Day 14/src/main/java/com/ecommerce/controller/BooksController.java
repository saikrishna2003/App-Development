package com.ecommerce.controller;

import com.ecommerce.entity.Books;
import com.ecommerce.repository.BooksRepository;
import com.ecommerce.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BooksController {
    @Autowired
    BooksRepository r1;

    @Autowired
    BooksService s1;

    @GetMapping("/get")
    public List<Books> getDetails() {
        return s1.getDetails();
    }

    @PostMapping("/post")
    public String postDetails(@RequestBody Books m1) {
        return s1.postDetails(m1);
    }

    @PutMapping("/put/{bid}")
    public Books updateDetails(@RequestBody Books m)
    {
        return s1.updateDetails(m);
    }

    @DeleteMapping("/book/delete/{id}")
    public void deleteDetails(@PathVariable("id")  Long id)
    {
       s1.deleteDetails(id);
    }


}