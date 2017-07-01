package com.diplr.infrastructure.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RequestMapping(value = "/comingsoon")
@Controller
public class ComingSoonController {

    @RequestMapping(method = RequestMethod.GET)
    public String index() {
        return "coming-soon/coming-soon";
    }
}
