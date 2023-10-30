package com.solus.escolaapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.solus.escolaapp.entities.EventoCalendario;

public interface EventoCalendarioRepository extends JpaRepository<EventoCalendario, Long> {

}