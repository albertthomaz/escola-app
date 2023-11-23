package com.solus.escolaapp.entities;

import java.util.Date;

import com.solus.escolaapp.entities.dto.EventoCalendarioDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "evento_calendario")
public class EventoCalendario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "id_turma")
    private Turma turma;

    private Date data;
    private String descricao;

    public EventoCalendario() {
    }

    public EventoCalendario(EventoCalendarioDTO dto) {
        this.data = dto.data();
        this.descricao = dto.descricao();
        this.turma = new Turma(dto.idTurma());
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

}
