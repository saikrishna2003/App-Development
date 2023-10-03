package com.kidszone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kidszone.entity.Books;

public interface booksRepository extends JpaRepository<Books, Long>{

}
