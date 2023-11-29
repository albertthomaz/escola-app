package com.solus.escolaapp.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.solus.escolaapp.entities.dto.MaterialComplementarResponseDTO;
import com.solus.escolaapp.repositories.MaterialComplementarRepository;

@RestController
@RequestMapping(value = "/materiais")
public class MaterialComplementarController {

    @Autowired
    private MaterialComplementarRepository _repository;

    @GetMapping
    public List<MaterialComplementarResponseDTO> SelecionarPorDisciplinaId(
            @RequestParam(required = true) long disciplinaId) {
        var materiais = _repository.findByDisciplinaId(disciplinaId);
        var result = materiais
                .stream()
                .map(x -> new MaterialComplementarResponseDTO(x.getId(), x.getDescricao(), null))
                .toList();
        return result;
    }

    @GetMapping(value = "/{id}")
    public MaterialComplementarResponseDTO ObterPorId(@PathVariable Long id) {
        var material = _repository.getReferenceById(id);
        var result = new MaterialComplementarResponseDTO(
                material.getId(),
                material.getDescricao(),
                material.getConteudo());
        return result;
    }
}