INSERT INTO professor(matricula, senha, nome) VALUES (1, '$2a$10$S55c6e/ax8WpaXWl.FARieu3V.p45GZjpuokh51alz2bkGol48Spa', 'Carlos Baffi'); --senha 'adm'

INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Matematica');
INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Portugues');
INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Geografia');
INSERT INTO disciplina(id_professor, nome) VALUES (1, 'Historia');

INSERT INTO turma(nome) VALUES ('Ensino Medio - Primeiro Ano');
INSERT INTO turma(nome) VALUES ('Ensino Medio - Segundo Ano');
INSERT INTO turma(nome) VALUES ('Ensino Medio - Terceiro Ano');
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (1, 1);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (1, 2);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (1, 3);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (1, 4);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (2, 1);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (2, 2);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (2, 3);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (2, 4);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (3, 1);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (3, 2);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (3, 3);
INSERT INTO turma_disciplina(id_turma, id_disciplina) VALUES (3, 4);

INSERT INTO aluno(matricula, senha, id_turma, nome) VALUES (2, '$2a$10$S55c6e/ax8WpaXWl.FARieu3V.p45GZjpuokh51alz2bkGol48Spa', 1, 'Albert Thomaz');
INSERT INTO aluno(matricula, senha, id_turma, nome) VALUES (3, '$2a$10$S55c6e/ax8WpaXWl.FARieu3V.p45GZjpuokh51alz2bkGol48Spa', 1, 'Matheus Morais');

INSERT INTO evento_calendario(id_turma, descricao, data) VALUES (1, 'Prova de Geografia', '2023-11-02 08:00:00');
INSERT INTO evento_calendario(id_turma, descricao, data) VALUES (1, 'Prova de Matematica', '2023-11-05 08:00:00');
INSERT INTO evento_calendario(id_turma, descricao, data) VALUES (1, 'Prova de Historia', '2023-11-01 08:00:00');
INSERT INTO evento_calendario(id_turma, descricao, data) VALUES (1, 'Prova de Biologia', '2023-12-02 08:00:00');
INSERT INTO evento_calendario(id_turma, descricao, data) VALUES (2, 'Prova de Historia', '2023-11-01 08:00:00');
INSERT INTO evento_calendario(id_turma, descricao, data) VALUES (2, 'Prova de Biologia', '2023-12-02 08:00:00');

INSERT INTO material_complementar(id_disciplina, descricao, conteudo) VALUES (4, 'Segunda Guerra Mundial', '<p>O conflito foi desencadeado pelas ambições expansionistas de Adolf Hitler na Europa, o expansionismo japonês na Ásia e as tensões resultantes das consequências da Primeira Guerra Mundial, como o Tratado de Versalhes.</p><p>Durante a guerra, ocorreram batalhas cruciais em vários teatros de operações, incluindo a Europa, o Pacífico, o Norte da África e outros lugares, com o uso extensivo de novas tecnologias militares, como tanques, aviões e armas nucleares.</p><p>O conflito teve um custo humano imenso, com milhões de mortes e devastação em larga escala em muitas partes do mundo. A guerra chegou ao fim em 1945, após a rendição do Japão, marcando um período de reconstrução e reorganização global pós-guerra.</p>');

INSERT INTO atividade(id_disciplina, descricao, prazo) VALUES (4, 'Redação Segunda Guerra Mundial', '2023-10-29 22:00:00');
INSERT INTO atividade_resposta(id_atividade, id_aluno, resposta, nota) VALUES (1, 1, 'a segunda guerra mundial foi..', NULL);

--SELECT * FROM DISCIPLINA;
--SELECT * FROM PROFESSOR;
--SELECT * FROM TURMA;
--SELECT * FROM TURMA_DISCIPLINA;
--SELECT * FROM ALUNO;
--SELECT * FROM EVENTO_CALENDARIO;
--SELECT * FROM MATERIAL_COMPLEMENTAR;
--SELECT * FROM ATIVIDADE;
--SELECT * FROM ATIVIDADE_RESPOSTA;