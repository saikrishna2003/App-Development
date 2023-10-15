package com.kidszone.repository;

import com.kidszone.entity.BooksCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksCategoryRepository extends JpaRepository<BooksCategory,Integer> {

}
