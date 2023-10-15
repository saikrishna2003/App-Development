package com.kidszone.repository;

import com.kidszone.entity.LessonPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LessonPlanRepository extends JpaRepository<LessonPlan,Long> {
}
