package com.ecommerce.controller;

import com.ecommerce.entity.BooksCategory;
import com.ecommerce.service.BooksCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookscategory")
public class BooksCategoryController {
    @Autowired
    BooksCategoryService bookscategoryservice;

    @GetMapping
    public ResponseEntity<List<BooksCategory>> getAllBooksCategory() {
        List<BooksCategory> getBooksCategory = bookscategoryservice.getAllBooksCategory();
        return new ResponseEntity<>(getBooksCategory, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BooksCategory> getProductCategoryById(@PathVariable Integer id) {
        Optional<BooksCategory> Bookscategory = bookscategoryservice.getBooksCategoryById(id);
        return Bookscategory.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<BooksCategory> addBooksCategory(@RequestBody BooksCategory bookscategory) {
        BooksCategory addedBooksCategory = bookscategoryservice.addBooksCategory(bookscategory);
        return new ResponseEntity<>(addedBooksCategory, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooks(@PathVariable Integer id) {
        Optional<BooksCategory> existingUser = bookscategoryservice.getBooksCategoryById(id);
        if (existingUser.isPresent()) {
            bookscategoryservice.deleteBooks(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<BooksCategory> updateBooks(@PathVariable Integer id, @RequestBody BooksCategory bookscategory) {
        Optional<BooksCategory> existingUser = bookscategoryservice.getBooksCategoryById(id);
        if (existingUser.isPresent()) {
            bookscategory.setCategoryId(id);
            BooksCategory updatedUser = bookscategoryservice.updateBooks(bookscategory);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
