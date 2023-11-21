package com.solus.escolaapp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Table(name = "aluno")
public class Aluno extends Usuario {

    @ManyToOne
    @JoinColumn(name = "id_turma")
    private Turma turma;

    public Aluno() {
    }

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }

    @Override
    public String getRole() {
        return "USUARIO";
    }
}
