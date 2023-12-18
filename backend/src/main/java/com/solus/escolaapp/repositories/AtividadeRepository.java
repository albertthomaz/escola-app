package com.solus.escolaapp.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.solus.escolaapp.entities.Atividade;

public interface AtividadeRepository extends JpaRepository<Atividade, Long> {

    List<Atividade> findByDisciplinaId(long disciplinaId);
}