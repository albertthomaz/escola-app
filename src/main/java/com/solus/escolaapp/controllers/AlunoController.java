package com.solus.escolaapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.solus.escolaapp.entities.Aluno;
import com.solus.escolaapp.repositories.AlunoRepository;

@RestController
@RequestMapping(value = "/alunos")
public class AlunoController {

    @Autowired
    private AlunoRepository _repository;

    @GetMapping
    public List<Aluno> SelecionarTodos() {
        var result = _repository.findAll();
        return result;
    }

    @GetMapping(value = "/{id}")
    public Aluno SelecionarPorId(@PathVariable Long id) {
        var result = _repository.findById(id).get();
        return result;
    }

    @PostMapping
    public Aluno Inserir(@RequestBody Aluno aluno) {
        var result = _repository.save(aluno);
        return result;
    }
}