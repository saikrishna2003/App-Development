package com.lessonplan.service;

import java.net.http.HttpHeaders;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.lessonplan.Repository.LessonPlanRepository;
import com.lessonplan.entity.LessonPlan;

@Service
public class LessonPlanService {

    @Autowired
    LessonPlanRepository repo;
    
    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }

    public List<LessonPlan> getAllLesson() {
        ResponseEntity<List<LessonPlan>> responseEntity = restTemplate().exchange("http://localhost:6969/api/lesson", HttpMethod.GET, null, new ParameterizedTypeReference<List<LessonPlan>>() {});
        return responseEntity.getBody();
    }
    
    public LessonPlan getLessonById(Long id) {
        ResponseEntity<LessonPlan> responseEntity = restTemplate().getForEntity("http://localhost:6969/api/lessonplan/{id}", LessonPlan.class, id);
        return responseEntity.getBody();
    }
    
    public ResponseEntity<LessonPlan> addProducts(LessonPlan lesson) {
        return new RestTemplate().postForEntity("http://localhost:6969/api/products", lesson, LessonPlan.class);
    }

    public void deleteLesson(Long id) {
        HashMap<String, Long> uriVariables = new HashMap<>();
        uriVariables.put("id", id);
        restTemplate().exchange("http://localhost:6969/api/products/{id}", HttpMethod.DELETE, null, LessonPlan.class, uriVariables);
    }
    

}
