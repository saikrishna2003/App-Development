package com.kidszone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kidszone.entity.User;

@Repository
public interface userRepository extends JpaRepository<User, Long>{

}