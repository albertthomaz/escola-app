namespace EscolaApp.Models;

public class AlunoAtividade
{
    public long Id { get; set; }
    
    public DateTime? Entrega { get; set; }
    public int? Nota { get; set; }
    public string Resposta { get; set; } = string.Empty;
    
    public long AlunoId { get; set; }
    public Aluno Aluno { get; set; }
    
    public long AtividadeId { get; set; }
    public Atividade Atividade { get; set; }
    
    
}