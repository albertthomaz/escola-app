namespace EscolaApp.Models;

public class Atividade
{
    public long Id { get; set; }
    public required string Nome { get; set; } = string.Empty;
    public required string Descricao { get; set; } = string.Empty;
    public required DateTime Prazo { get; set; }
    
    public virtual required Disciplina Disciplina { get; set; }
    public virtual List<AlunoAtividade> Entregas { get; set; } = [];

}