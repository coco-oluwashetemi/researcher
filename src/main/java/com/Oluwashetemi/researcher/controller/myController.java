package com.Oluwashetemi.researcher.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
public class myController {

    @PostMapping("/postPath")
    public String getQuestion(@RequestBody String question){
        return question;
    }

}