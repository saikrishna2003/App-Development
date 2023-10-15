package com.lessonplan.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "_lessonplan")
public class LessonPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long lid;

    private String lessonname;

    private int lessonduration;

    private int lessonrating;

    public Long getLid() {
        return lid;
    }

    public void setLid(Long lid) {
        this.lid = lid;
    }

    public String getLessonname() {
        return lessonname;
    }

    public void setLessonname(String lessonname) {
        this.lessonname = lessonname;
    }

    public int getLessonduration() {
        return lessonduration;
    }

    public void setLessonduration(int lessonduration) {
        this.lessonduration = lessonduration;
    }

    public int getLessonrating() {
        return lessonrating;
    }

    public void setLessonrating(int lessonrating) {
        this.lessonrating = lessonrating;
    }

    public LessonPlan(Long lid, String lessonname, int lessonduration, int lessonrating) {
        this.lid = lid;
        this.lessonname = lessonname;
        this.lessonduration = lessonduration;
        this.lessonrating = lessonrating;
    }

    public LessonPlan() {
        super();
    }
}
