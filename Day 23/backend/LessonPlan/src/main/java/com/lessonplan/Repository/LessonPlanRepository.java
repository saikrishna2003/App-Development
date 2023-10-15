package com.lessonplan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lessonplan.entity.LessonPlan;

public interface LessonPlanRepository extends JpaRepository<LessonPlan, Long>{

}
