package com.solus.escolaapp.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.solus.escolaapp.entities.Atividade;

public interface AtividadeRepository extends JpaRepository<Atividade, Long> {

    @Query(value = "SELECT * FROM atividade WHERE id_aluno=?", nativeQuery = true)
    List<Atividade> findByIdAluno(Long idAluno);

}