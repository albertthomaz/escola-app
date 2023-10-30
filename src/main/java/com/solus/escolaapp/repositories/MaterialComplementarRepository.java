package com.solus.escolaapp.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.solus.escolaapp.entities.MaterialComplementar;

public interface MaterialComplementarRepository extends JpaRepository<MaterialComplementar, Long> {

    @Query(value = "SELECT * FROM material_complementar WHERE id_disciplina=?", nativeQuery = true)
    List<MaterialComplementar> findByIdDisciplina(Long idDisciplina);

}