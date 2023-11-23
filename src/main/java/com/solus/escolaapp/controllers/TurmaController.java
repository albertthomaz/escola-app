package com.solus.escolaapp.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.solus.escolaapp.entities.dto.TurmaResponseDTO;
import com.solus.escolaapp.repositories.TurmaRepository;

@RestController
@RequestMapping(value = "/turmas")
public class TurmaController {

    @Autowired
    private TurmaRepository _repository;

    @GetMapping
    public List<TurmaResponseDTO> SelecionarTodos() {
        var turmas = _repository.findAll();

        var result = turmas
                .stream()
                .map(x -> new TurmaResponseDTO(x.getId(), x.getNome()))
                .toList();
        return result;
    }
}