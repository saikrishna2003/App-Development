package com.kidszone.service;

import com.kidszone.entity.BooksCategory;
import com.kidszone.repository.BooksCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class BooksCategoryService {
    @Autowired
    BooksCategoryRepository CategoryRepository;
    public List<BooksCategory> getAllBooksCategory(){
        return CategoryRepository.findAll();
    }

    public Optional<BooksCategory> getBooksCategoryById(Integer id) {

        return CategoryRepository.findById(id);
    }
    public BooksCategory addBooksCategory(BooksCategory bookscategory) {
        return CategoryRepository.save(bookscategory);
    }
    public void deleteBooks(Integer id) {
        CategoryRepository.deleteById(id);
    }
    public BooksCategory updateBooks(BooksCategory bookscategory) {
        return CategoryRepository.save(bookscategory);
    }

}
