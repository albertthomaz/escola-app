package com.solus.escolaapp.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.solus.escolaapp.entities.Disciplina;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {

    List<Disciplina> findByTurmas_Id(long turmaId);

}