INSERT INTO professor(nome) VALUES ('Carlos Baffi');

INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Matematica');
INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Portugues');
INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Geografia');

INSERT INTO turma(nome) VALUES ('Ensino Medio - Terceiro Ano');
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (1, 1);

INSERT INTO aluno(id_turma, nome) VALUES (1, 'Albert Thomaz');
INSERT INTO aluno(id_turma, nome) VALUES (1, 'Matheus Morais');


--SELECT * FROM DISCIPLINA;
--SELECT * FROM PROFESSOR;
--SELECT * FROM TURMA;
--SELECT * FROM TURMA_DISCIPLINA;
--SELECT * FROM ALUNO;