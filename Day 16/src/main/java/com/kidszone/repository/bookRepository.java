package com.kidszone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kidszone.Entity.Books;

public interface bookRepository extends JpaRepository<Books, Long>{

}
