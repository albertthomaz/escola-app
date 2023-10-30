INSERT INTO professor(nome) VALUES ('Carlos Baffi');

INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Matematica');
INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Portugues');
INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Geografia');
INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Historia');

INSERT INTO turma(nome) VALUES ('Ensino Medio - Terceiro Ano');
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (1, 1);

INSERT INTO aluno(id_turma, nome) VALUES (1, 'Albert Thomaz');
INSERT INTO aluno(id_turma, nome) VALUES (1, 'Matheus Morais');

INSERT INTO evento_calendario(id_turma, descricao, data) VALUES (1, 'Prova de Geografia', '2023-11-02 08:00:00');

INSERT INTO material_complementar(id_disciplina, descricao, conteudo) VALUES (4, 'Segunda Guerra Mundial', 'TESTE_MATERIAL_COMPLEMENTAR');

--SELECT * FROM DISCIPLINA;
--SELECT * FROM PROFESSOR;
--SELECT * FROM TURMA;
--SELECT * FROM TURMA_DISCIPLINA;
--SELECT * FROM ALUNO;
--SELECT * FROM EVENTO_CALENDARIO;
--SELECT * FROM MATERIAL_COMPLEMENTAR;