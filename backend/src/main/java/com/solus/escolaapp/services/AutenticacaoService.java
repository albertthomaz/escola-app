package com.solus.escolaapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.solus.escolaapp.repositories.AlunoRepository;
import com.solus.escolaapp.repositories.ProfessorRepository;

@Service
public class AutenticacaoService implements UserDetailsService {

    @Autowired
    private ProfessorRepository _professorRepository;
    @Autowired
    private AlunoRepository _alunoRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        long matricula = Long.parseLong(username);
        UserDetails user = null;

        if (user == null)
            user = _alunoRepository.findByMatricula(matricula);

        if (user == null)
            user = _professorRepository.findByMatricula(matricula);

        return user;
    }

}
