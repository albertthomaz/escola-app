package com.solus.escolaapp.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.solus.escolaapp.entities.MaterialComplementar;
import com.solus.escolaapp.repositories.MaterialComplementarRepository;

@RestController
@RequestMapping(value = "/material_complementar")
public class MaterialComplementarController {

    @Autowired
    private MaterialComplementarRepository _repository;

    @GetMapping(value = "/{idDisciplina}")
    public List<MaterialComplementar> SelecionarPorIdTurma(@PathVariable Long idDisciplina) {
        var result = _repository.findByIdDisciplina(idDisciplina);
        return result;
    }
}