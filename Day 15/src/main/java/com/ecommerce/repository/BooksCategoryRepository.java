package com.ecommerce.repository;

import com.ecommerce.entity.BooksCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksCategoryRepository extends JpaRepository<BooksCategory,Integer> {
}
