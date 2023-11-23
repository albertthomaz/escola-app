package com.solus.escolaapp.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.solus.escolaapp.repositories.AtividadeRepository;
import com.solus.escolaapp.entities.Atividade;

@RestController
@RequestMapping(value = "/atividades")
public class AtividadeController {

    @Autowired
    private AtividadeRepository _repository;

    @GetMapping(value = "/{idAluno}")
    public List<Atividade> SelecionarPorIdAluno(@PathVariable Long idAluno) {
        var result = _repository.findByIdAluno(idAluno);
        return result;
    }
}