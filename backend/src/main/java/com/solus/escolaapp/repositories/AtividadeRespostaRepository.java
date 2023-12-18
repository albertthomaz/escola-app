package com.solus.escolaapp.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.solus.escolaapp.entities.AtividadeResposta;

public interface AtividadeRespostaRepository extends JpaRepository<AtividadeResposta, Long> {

    List<AtividadeResposta> findByAtividadeId(long atividadeId);
}