namespace EscolaApp.Models;

public class Disciplina
{
    public long Id { get; set; }
    public required string Nome { get; set; } = string.Empty;
    public virtual List<Atividade> Atividades { get; set; } = [];
}