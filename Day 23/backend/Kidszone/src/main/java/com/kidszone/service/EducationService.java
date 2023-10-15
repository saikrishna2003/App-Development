package com.kidszone.service;
import com.kidszone.entity.Books;
import com.kidszone.entity.BooksCategory;
import com.kidszone.entity.Education;
import com.kidszone.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class EducationService {

    @Autowired
    EducationRepository r1;

    public List<Education> getDetails()
    {
        return r1.findAll();
    }

    public Education getById(Long id) {
        return r1.findById(id).orElse(null);
    }
    public String postDetails(Education m1)
    {
        r1.save(m1);
        return "Details are saved";
    }
    public Education updateDetails(@RequestBody Education t)
    {
        System.out.println("Changes updated");
        return r1.save(t);
    }


}
