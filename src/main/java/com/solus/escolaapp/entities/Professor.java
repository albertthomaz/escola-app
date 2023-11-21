package com.solus.escolaapp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "professor")
public class Professor extends Usuario {

    @Override
    public String getRole() {
        return "ADMIN";
    }
}