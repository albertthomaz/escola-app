namespace EscolaApp.Models;

public class Aluno
{
    public long Id { get; set; }
    public required string Nome { get; set; } = string.Empty;
    public required string Matricula { get; set; } = string.Empty;
    public required string Senha { get; set; } = string.Empty;
    
    public virtual List<AlunoAtividade> Entregas { get; set; } = [];
}