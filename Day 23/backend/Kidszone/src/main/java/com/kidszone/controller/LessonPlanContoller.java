package com.kidszone.controller;

import com.kidszone.entity.LessonPlan;
import com.kidszone.service.LessonPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/lessonplan")
@CrossOrigin(origins = "http://localhost:3000")
public class LessonPlanContoller {
    @Autowired
    LessonPlanService lessonservice;

    @GetMapping
    public ResponseEntity<List<LessonPlan>> getAllLesson(){
        List<LessonPlan> getLesson = lessonservice.getAllLessonPlans();
        return new ResponseEntity<>(getLesson, HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<LessonPlan> getProductById(@PathVariable long id){
        Optional<LessonPlan> product = Optional.ofNullable(lessonservice.getLessonById(id));
        return product.map(value -> new ResponseEntity<>(value,HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/add")
    public ResponseEntity<LessonPlan> addLesson(@RequestBody LessonPlan m1) {
        return lessonservice.addLesson(m1);
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
