package com.solus.escolaapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import com.solus.escolaapp.entities.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {

    UserDetails findByMatricula(long matricula);
}