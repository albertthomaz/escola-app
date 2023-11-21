package com.solus.escolaapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solus.escolaapp.entities.Professor;
import com.solus.escolaapp.entities.Usuario;
import com.solus.escolaapp.entities.dto.LoginDTO;
import com.solus.escolaapp.entities.dto.LoginResponseDTO;
import com.solus.escolaapp.infra.security.TokenService;
import com.solus.escolaapp.repositories.AlunoRepository;
import com.solus.escolaapp.repositories.ProfessorRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("autenticacao")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager _authenticationManager;
    @Autowired
    private TokenService _tokenService;
    @Autowired
    private AlunoRepository _alunoRepository;
    @Autowired
    private ProfessorRepository _professorRepository;

    @PostMapping(value = "/login")
    public ResponseEntity login(@RequestBody @Valid LoginDTO dto) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(dto.matricula(), dto.senha());
        var auth = this._authenticationManager.authenticate(usernamePassword);

        var token = _tokenService.gerarToken((Usuario) auth.getPrincipal());
        var response = new LoginResponseDTO(token);

        return ResponseEntity.ok(response);
    }

    @PostMapping(value = "/registrar")
    public ResponseEntity registrar(@RequestBody @Valid LoginDTO dto) {

        Professor professor = new Professor();
        professor.setMatricula(dto.matricula());
        professor.setSenha(new BCryptPasswordEncoder().encode(dto.senha()));
        professor.setNome("Carlos Baffizera");

        this._professorRepository.save(professor);
        return ResponseEntity.ok().build();
    }
}
