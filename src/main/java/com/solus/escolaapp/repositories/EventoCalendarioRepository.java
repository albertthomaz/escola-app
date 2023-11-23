package com.solus.escolaapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.solus.escolaapp.entities.EventoCalendario;

public interface EventoCalendarioRepository extends JpaRepository<EventoCalendario, Long> {

    List<EventoCalendario> findByTurmaId(long turmaId);

}