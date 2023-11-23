package com.solus.escolaapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import com.solus.escolaapp.entities.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {

    UserDetails findByMatricula(long matricula);
}