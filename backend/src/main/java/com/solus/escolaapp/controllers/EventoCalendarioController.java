package com.solus.escolaapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.solus.escolaapp.entities.EventoCalendario;
import com.solus.escolaapp.entities.dto.EventoCalendarioDTO;
import com.solus.escolaapp.entities.dto.EventoCalendarioResponseDTO;
import com.solus.escolaapp.repositories.EventoCalendarioRepository;

@RestController
@RequestMapping(value = "/eventos_calendario")
public class EventoCalendarioController {

    @Autowired
    private EventoCalendarioRepository _repository;

    @GetMapping
    public List<EventoCalendarioResponseDTO> SelecionarPorTurmaId(@RequestParam(required = true) long turmaId) {
        var eventos = _repository.findByTurmaId(turmaId);

        var result = eventos
                .stream()
                .map(x -> new EventoCalendarioResponseDTO(x.getData(), x.getDescricao(), x.getTurma().getNome()))
                .toList();
        return result;
    }

    @PostMapping
    public EventoCalendario Inserir(@RequestBody EventoCalendarioDTO dto) {
        EventoCalendario eventoCalendario = new EventoCalendario(dto);
        var result = _repository.save(eventoCalendario);
        return result;
    }
}