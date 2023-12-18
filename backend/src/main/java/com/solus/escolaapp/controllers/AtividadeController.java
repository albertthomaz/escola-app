package com.solus.escolaapp.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.solus.escolaapp.repositories.AtividadeRepository;
import com.solus.escolaapp.repositories.AtividadeRespostaRepository;
import com.solus.escolaapp.entities.dto.AtividadeResponseDTO;
import com.solus.escolaapp.entities.dto.AtividadeRespostaResponseDTO;

@RestController
@RequestMapping(value = "/atividades")
public class AtividadeController {

    @Autowired
    private AtividadeRepository _repository;
    @Autowired
    private AtividadeRespostaRepository _atividadeRespostaRepository;

    @GetMapping(params = "disciplinaId")
    public List<AtividadeResponseDTO> SelecionarPorDisciplinaId(@RequestParam(required = true) long disciplinaId) {
        var atividades = _repository.findByDisciplinaId(disciplinaId);
        var result = atividades
                .stream()
                .map(x -> new AtividadeResponseDTO(x.getId(), x.getDescricao(), x.getPrazo()))
                .toList();
        return result;
    }

    @GetMapping(params = "atividadeId")
    public List<AtividadeRespostaResponseDTO> SelecionarPorAtividadeId(
            @RequestParam(required = true) long atividadeId) {
        var atividades = _atividadeRespostaRepository.findByAtividadeId(atividadeId);
        var result = atividades
                .stream()
                .map(x -> new AtividadeRespostaResponseDTO(
                        x.getId(),
                        x.getAluno().getNome(),
                        x.getResposta(),
                        x.getNota()))
                .toList();
        return result;
    }

}