package com.solus.escolaapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.solus.escolaapp.entities.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {

}