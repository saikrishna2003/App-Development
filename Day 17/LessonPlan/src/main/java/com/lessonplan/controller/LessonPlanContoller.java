package com.lessonplan.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lessonplan.entity.LessonPlan;
import com.lessonplan.service.LessonPlanService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/lessonplan")
public class LessonPlanContoller {
    @Autowired
    LessonPlanService lessonservice;

    @GetMapping
    public ResponseEntity<List<LessonPlan>> getAllLesson(){
        List<LessonPlan> getLesson = lessonservice.getAllLesson();
        return new ResponseEntity<>(getLesson, HttpStatus.OK);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<LessonPlan> getProductById(@PathVariable long id){
        Optional<LessonPlan> product = Optional.ofNullable(lessonservice.getLessonById(id));
        return product.map(value -> new ResponseEntity<>(value,HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @PostMapping
    public ResponseEntity<LessonPlan> addLesson(@RequestBody LessonPlan lesson){
        LessonPlan addedProduct = addLesson(lesson).getBody();
        return new ResponseEntity<>(addedProduct,HttpStatus.CREATED);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLesson(@PathVariable Long id){
        Optional<LessonPlan> existingUser = Optional.ofNullable(lessonservice.getLessonById(id));
        if(existingUser.isPresent()) {
            lessonservice.deleteLesson(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
