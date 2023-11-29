package com.solus.escolaapp.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.solus.escolaapp.entities.MaterialComplementar;

public interface MaterialComplementarRepository extends JpaRepository<MaterialComplementar, Long> {

    List<MaterialComplementar> findByDisciplinaId(Long disciplinaId);
}