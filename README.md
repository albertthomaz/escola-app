Projeto referente a disciplina de Prática Profissional Em Análise E Desenvolvimento De Sistemas

# Endpoints

## - Listar Alunos

Retorna uma lista de todas as tarefas.

Método HTTP: GET
URL: /alunos
Parâmetros de consulta:
Resposta bem-sucedida (código 200):

```json
[
  {
    "id": 1,
    "nome": "Albert Thomaz",
    "turma": {
      "id": 1,
      "nome": "Ensino Medio - Terceiro Ano",
      "disciplinas": [
        {
          "id": 1,
          "nome": "Matematica",
          "professor": { "id": 1, "nome": "Carlos Baffi" }
        }
      ]
    }
  },
  {
    "id": 2,
    "nome": "Matheus Morais",
    "turma": {
      "id": 1,
      "nome": "Ensino Medio - Terceiro Ano",
      "disciplinas": [
        {
          "id": 1,
          "nome": "Matematica",
          "professor": { "id": 1, "nome": "Carlos Baffi" }
        }
      ]
    }
  }
]
```

## Selecionar Aluno

Retorna as informacoes de um aluno específico com base no ID.

Método HTTP: GET
URL: /alunos/{id}
Resposta bem-sucedida (código 200):

```json
{
  "id": 1,
  "nome": "Albert Thomaz",
  "turma": {
    "id": 1,
    "nome": "Ensino Medio - Terceiro Ano",
    "disciplinas": [
      {
        "id": 1,
        "nome": "Matematica",
        "professor": { "id": 1, "nome": "Carlos Baffi" }
      }
    ]
  }
}
```

## Selecionar Evento de Calendario

Retorna as informacoes do cronograma baseado no ID da turma.

Método HTTP: GET
URL: /eventos_calendario/{idTurma}
Resposta bem-sucedida (código 200):

```json
{
  "id": 1,
  "turma": {
    "id": 1,
    "nome": "Ensino Medio - Terceiro Ano",
    "disciplinas": [
      {
        "id": 1,
        "nome": "Matematica",
        "professor": { "id": 1, "nome": "Carlos Baffi" }
      }
    ]
  },
  "data": "2023-11-02T11:00:00.000+00:00",
  "descricao": "Prova de Geografia"
}
```

## Selecionar Material Complementar

Retorna o conteudo de um material complementar com base no ID da disciplina.

Método HTTP: GET
URL: /materiais_complementares/{idDisciplina}
Resposta bem-sucedida (código 200):

```json
[
  {
    "id": 1,
    "descricao": "Segunda Guerra Mundial",
    "conteudo": "TESTE_MATERIAL_COMPLEMENTAR",
    "disciplina": {
      "id": 4,
      "nome": "Historia",
      "professor": { "id": 1, "nome": "Carlos Baffi" }
    }
  }
]
```

## Selecionar Atividade

Retorna a lista de atividades de um aluno com base no ID da disciplina.

Método HTTP: GET
URL: /atividades/{idDisciplina}
Resposta bem-sucedida (código 200):

```json
[
  {
    "id": 1,
    "disciplina": {
      "id": 4,
      "nome": "Historia",
      "professor": { "id": 1, "nome": "Carlos Baffi" }
    },
    "aluno": {
      "id": 1,
      "nome": "Albert Thomaz",
      "turma": {
        "id": 1,
        "nome": "Ensino Medio - Terceiro Ano",
        "disciplinas": [
          {
            "id": 1,
            "nome": "Matematica",
            "professor": { "id": 1, "nome": "Carlos Baffi" }
          }
        ]
      }
    },
    "descricao": "Segunda Guerra Mundial",
    "prazo": "2023-10-30T01:00:00.000+00:00",
    "resposta": "TESTE_ATIVIDADE",
    "nota": null
  }
]
```

## Enviar Atividade

Envia a resposta da atividade existente com base no ID.
Método HTTP: PUT
URL: /atividades/{id}
Corpo da solicitação (JSON):

```json
{
  "resposta": "Durante a segunda guerra mundial......"
}
```

Resposta bem-sucedida (código 200):

```json
{
  "id": 1,
  "disciplina": {
    "id": 4,
    "nome": "Historia",
    "professor": { "id": 1, "nome": "Carlos Baffi" }
  },
  "aluno": {
    "id": 1,
    "nome": "Albert Thomaz",
    "turma": {
      "id": 1,
      "nome": "Ensino Medio - Terceiro Ano",
      "disciplinas": [
        {
          "id": 1,
          "nome": "Matematica",
          "professor": { "id": 1, "nome": "Carlos Baffi" }
        }
      ]
    }
  },
  "descricao": "Segunda Guerra Mundial",
  "prazo": "2023-10-30T01:00:00.000+00:00",
  "resposta": "Durante a segunda guerra mundial......",
  "nota": null
}
```

# A API pode retornar os seguintes códigos de erro:

400 Bad Request: Erro de solicitação inválida.
404 Not Found: A tarefa não foi encontrada.
500 Internal Server Error: Erro interno do servidor.
