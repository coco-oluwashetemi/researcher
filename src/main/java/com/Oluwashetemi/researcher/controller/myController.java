package com.Oluwashetemi.researcher.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;


import com.Oluwashetemi.researcher.Model.ResearchDone;





@RestController
public class myController {

    @PostMapping("/submitQuestion")
    public ResearchDone getQuestion(@RequestBody ResearchDone question){

        return question;
        
    }

}