package com.solus.escolaapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.solus.escolaapp.entities.EventoCalendario;
import com.solus.escolaapp.repositories.EventoCalendarioRepository;

@RestController
@RequestMapping(value = "/eventos_calendario")
public class EventoCalendarioController {

    @Autowired
    private EventoCalendarioRepository _repository;

    @GetMapping
    public List<EventoCalendario> SelecionarTodos() {
        var result = _repository.findAll();
        return result;
    }
}