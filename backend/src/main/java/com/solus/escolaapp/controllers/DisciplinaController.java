package com.solus.escolaapp.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.solus.escolaapp.entities.dto.DisciplinaResponseDTO;
import com.solus.escolaapp.repositories.DisciplinaRepository;

@RestController
@RequestMapping(value = "/disciplinas")
public class DisciplinaController {

    @Autowired
    private DisciplinaRepository _repository;

    @GetMapping
    public List<DisciplinaResponseDTO> SelecionarPorTurmaId(@RequestParam(required = true) long turmaId) {
        var disciplinas = _repository.findByTurmas_Id(turmaId);

        var result = disciplinas
                .stream()
                .map(x -> new DisciplinaResponseDTO(x.getNome()))
                .toList();
        return result;
    }
}