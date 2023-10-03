package com.kidszone.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kidszone.entity.Books;
import com.kidszone.repository.booksRepository;
@Service
public class BooksService {
	@Autowired
	booksRepository repo;
	public List<Books> getAllBooks(){
		return repo.findAll();
	}
	public Optional<Books> getBooksById(Long id) {
		return repo.findById(id);
	}
	public Books addBooks(Books book) {
		return repo.save(book);
	}
	public void deleteBooks(Long id) {
		repo.deleteById(id);
	}
	public Books updateBooks(Books book) {
		return repo.save(book);
	}
}
