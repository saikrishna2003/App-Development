package com.kidszone.service;

import com.kidszone.entity.Books;
import com.kidszone.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class BooksService {

    @Autowired
    BooksRepository r1;

    public List<Books> getDetails()
    {
        return r1.findAll();
    }

    public String postDetails(Books m1)
    {
        r1.save(m1);
        return "Details are saved";
    }

    public void deleteDetails(@PathVariable("id") Long bid)
    {
        r1.deleteById(bid);
    }

    public Books updateDetails(@RequestBody Books t)
    {
        System.out.println("Changes updated");
        return r1.save(t);
    }


}