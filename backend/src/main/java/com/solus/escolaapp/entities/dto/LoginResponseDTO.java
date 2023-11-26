package com.solus.escolaapp.entities.dto;

public record LoginResponseDTO(String token, long matricula, String nome, String role) {

}
