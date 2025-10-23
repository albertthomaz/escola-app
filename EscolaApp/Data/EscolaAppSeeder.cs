using EscolaApp.Models;

namespace EscolaApp.Data;

public static class EscolaAppSeeder
{
    private static readonly Random Random = new();
    
    public static void SeedData(EscolaAppDbContext db)
    {
        if (db.Disciplinas.Any()) return;

        var historia = new Disciplina { Nome = "História" };
        var matematica = new Disciplina { Nome = "Matemática" };
        var geografia = new Disciplina { Nome = "Geografia" };
        var fisica = new Disciplina { Nome = "Física" };
        var biologia = new Disciplina { Nome = "Biologia" };
        var quimica = new Disciplina { Nome = "Química" };
        var linguaPortuguesa  = new Disciplina { Nome = "Língua Portuguesa" };

        db.Disciplinas.AddRange(historia, matematica, geografia, fisica, biologia, quimica, linguaPortuguesa);

        Atividade[] atividades = [
            // Matemática
            new() { Nome = "Frações e Operações", Descricao = "Resolver exercícios com frações", Prazo = GerarDataPrazoAleatorio(), Disciplina = matematica },
            new() { Nome = "Funções e Gráficos", Descricao = "Construir gráficos de funções", Prazo = GerarDataPrazoAleatorio(), Disciplina = matematica },
            new() { Nome = "Probabilidade", Descricao = "Organizar dados e calcular chances", Prazo = GerarDataPrazoAleatorio(), Disciplina = matematica },
            new() { Nome = "Sistema de Equações", Descricao = "Resolver problemas com duas variáveis", Prazo = GerarDataPrazoAleatorio(), Disciplina = matematica },
            new() { Nome = "Porcentagem", Descricao = "Aplicar porcentagem em situações reais", Prazo = GerarDataPrazoAleatorio(), Disciplina = matematica },
            new() { Nome = "Estatística", Descricao = "Montar tabelas e gráficos com dados", Prazo = GerarDataPrazoAleatorio(), Disciplina = matematica },
            new() { Nome = "Expressões Algébricas", Descricao = "Simplificar e resolver expressões", Prazo = GerarDataPrazoAleatorio(), Disciplina = matematica },
            new() { Nome = "Razão e Proporção", Descricao = "Resolver problemas com escalas e proporções", Prazo = GerarDataPrazoAleatorio(), Disciplina = matematica },
            new() { Nome = "Média Aritmética", Descricao = "Calcular médias em diferentes contextos", Prazo = GerarDataPrazoAleatorio(), Disciplina = matematica },

            // Geografia
            new() { Nome = "Formações do Relevo", Descricao = "Identificar tipos de relevo", Prazo = GerarDataPrazoAleatorio(), Disciplina = geografia },
            new() { Nome = "Climas do Brasil", Descricao = "Responder questionário sobre clima", Prazo = GerarDataPrazoAleatorio(), Disciplina = geografia },
            new() { Nome = "Urbanização", Descricao = "Pesquisar impactos sociais", Prazo = GerarDataPrazoAleatorio(), Disciplina = geografia },
            new() { Nome = "Recursos Naturais", Descricao = "Fazer resumo sobre sustentabilidade", Prazo = GerarDataPrazoAleatorio(), Disciplina = geografia },
            new() { Nome = "Globalização", Descricao = "Debater efeitos culturais e econômicos", Prazo = GerarDataPrazoAleatorio(), Disciplina = geografia },
            new() { Nome = "Vegetação Brasileira", Descricao = "Estudar biomas e características", Prazo = GerarDataPrazoAleatorio(), Disciplina = geografia },
            new() { Nome = "Impactos Ambientais", Descricao = "Pesquisar causas e soluções", Prazo = GerarDataPrazoAleatorio(), Disciplina = geografia },

            // História
            new() { Nome = "Brasil Colônia", Descricao = "Responder perguntas sobre o período", Prazo = GerarDataPrazoAleatorio(), Disciplina = historia },
            new() { Nome = "Revolução Francesa", Descricao = "Criar linha do tempo", Prazo = GerarDataPrazoAleatorio(), Disciplina = historia },
            new() { Nome = "Segunda Guerra Mundial", Descricao = "Assistir documentário e responder", Prazo = GerarDataPrazoAleatorio(), Disciplina = historia },
            new() { Nome = "Independência do Brasil", Descricao = "Estudar contexto e consequências", Prazo = GerarDataPrazoAleatorio(), Disciplina = historia },
            new() { Nome = "Império Romano", Descricao = "Pesquisar organização política", Prazo = GerarDataPrazoAleatorio(), Disciplina = historia },
            new() { Nome = "Revolução Industrial", Descricao = "Analisar impactos sociais", Prazo = GerarDataPrazoAleatorio(), Disciplina = historia },
            new() { Nome = "Colonização da América", Descricao = "Comparar modelos coloniais", Prazo = GerarDataPrazoAleatorio(), Disciplina = historia },
            
            // Física
            new() { Nome = "Leis de Newton", Descricao = "Estudar as três leis e resolver exercícios", Prazo = GerarDataPrazoAleatorio(), Disciplina = fisica },
            new() { Nome = "Cinemática", Descricao = "Resolver problemas de movimento uniforme e acelerado", Prazo = GerarDataPrazoAleatorio(), Disciplina = fisica },
            new() { Nome = "Óptica", Descricao = "Estudar reflexão e refração da luz", Prazo = GerarDataPrazoAleatorio(), Disciplina = fisica },
            new() { Nome = "Termodinâmica", Descricao = "Ler sobre leis da termodinâmica e responder questões", Prazo = GerarDataPrazoAleatorio(), Disciplina = fisica },
            new() { Nome = "Eletrostática", Descricao = "Resolver exercícios sobre cargas elétricas", Prazo = GerarDataPrazoAleatorio(), Disciplina = fisica },

            // Biologia
            new() { Nome = "Células", Descricao = "Identificar organelas e suas funções", Prazo = GerarDataPrazoAleatorio(), Disciplina = biologia },
            new() { Nome = "Genética", Descricao = "Resolver cruzamentos genéticos simples", Prazo = GerarDataPrazoAleatorio(), Disciplina = biologia },
            new() { Nome = "Sistema Nervoso", Descricao = "Estudar estrutura e funcionamento", Prazo = GerarDataPrazoAleatorio(), Disciplina = biologia },
            new() { Nome = "Fotossíntese", Descricao = "Ler sobre o processo e responder questões", Prazo = GerarDataPrazoAleatorio(), Disciplina = biologia },
            new() { Nome = "Respiração Celular", Descricao = "Comparar respiração aeróbica e anaeróbica", Prazo = GerarDataPrazoAleatorio(), Disciplina = biologia },
            new() { Nome = "Sistema Imunológico", Descricao = "Estudar defesa do organismo", Prazo = GerarDataPrazoAleatorio(), Disciplina = biologia },

            // Química
            new() { Nome = "Tabela Periódica", Descricao = "Estudar grupos e propriedades dos elementos", Prazo = GerarDataPrazoAleatorio(), Disciplina = quimica },
            new() { Nome = "Ligações Químicas", Descricao = "Identificar tipos de ligações", Prazo = GerarDataPrazoAleatorio(), Disciplina = quimica },
            new() { Nome = "Reações Químicas", Descricao = "Classificar e balancear equações", Prazo = GerarDataPrazoAleatorio(), Disciplina = quimica },
            new() { Nome = "Ácidos e Bases", Descricao = "Estudar propriedades e pH", Prazo = GerarDataPrazoAleatorio(), Disciplina = quimica },
            new() { Nome = "Estequiometria", Descricao = "Resolver cálculos de reagentes e produtos", Prazo = GerarDataPrazoAleatorio(), Disciplina = quimica },
            new() { Nome = "Química Orgânica", Descricao = "Identificar funções orgânicas", Prazo = GerarDataPrazoAleatorio(), Disciplina = quimica },
            new() { Nome = "Estados da Matéria", Descricao = "Ler sobre sólido, líquido e gasoso", Prazo = GerarDataPrazoAleatorio(), Disciplina = quimica },
            new() { Nome = "Misturas e Separações", Descricao = "Estudar técnicas de separação", Prazo = GerarDataPrazoAleatorio(), Disciplina = quimica },

            // Língua Portuguesa
            new() { Nome = "Interpretação de Texto", Descricao = "Ler e responder questões de compreensão", Prazo = GerarDataPrazoAleatorio(), Disciplina = linguaPortuguesa },
            new() { Nome = "Figuras de Linguagem", Descricao = "Identificar e exemplificar figuras", Prazo = GerarDataPrazoAleatorio(), Disciplina = linguaPortuguesa },
            new() { Nome = "Gêneros Textuais", Descricao = "Classificar e analisar diferentes gêneros", Prazo = GerarDataPrazoAleatorio(), Disciplina = linguaPortuguesa },
            new() { Nome = "Concordância Verbal", Descricao = "Estudar regras e aplicar em frases", Prazo = GerarDataPrazoAleatorio(), Disciplina = linguaPortuguesa },
            new() { Nome = "Variação Linguística", Descricao = "Estudar usos da língua em diferentes contextos", Prazo = GerarDataPrazoAleatorio(), Disciplina = linguaPortuguesa },
            new() { Nome = "Literatura Brasileira", Descricao = "Ler obras e identificar escolas literárias", Prazo = GerarDataPrazoAleatorio(), Disciplina = linguaPortuguesa }
        ];
        
        db.Atividades.AddRange(atividades);
        var aluno1 = new Aluno { Matricula = "123", Nome = "Albert", Senha = "123" };
        
        db.AlunosAtividade.AddRange(
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[0], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[5], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[6], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[11], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[14], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[17], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[21], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[24], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[30], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[31], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[36], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[41], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() },
            new AlunoAtividade { Aluno = aluno1, Atividade = atividades[45], Nota = GerarNotaAleatoria(), Entrega = GerarDataEntregaAleatoria() }
        );
        
        db.Alunos.AddRange(aluno1);
        db.SaveChanges();
    }
    
    private static DateTime GerarDataEntregaAleatoria()
    {
        var diasAntes = Random.Next(0, 31);
        var horas = Random.Next(0, 24);
        var minutos = Random.Next(0, 60);
        var segundos = Random.Next(0, 60);
        var dataBase = DateTime.Now.AddDays(-diasAntes);

        return new DateTime(
            dataBase.Year,
            dataBase.Month,
            dataBase.Day,
            horas,
            minutos,
            segundos
        );
    }

    private static DateTime GerarDataPrazoAleatorio()
    {
        var dias = Random.Next(-25, 40);
        return DateTime.Now.AddDays(dias).Date;
    }
    
    private static int GerarNotaAleatoria() => Random.Next(1, 10);
}