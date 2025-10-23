using EscolaApp.Data;
using EscolaApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EscolaApp.Services;

public class AtividadeService(EscolaAppDbContext dbContext)
{
    public async Task<List<AlunoAtividade>> GetAtividades(long alunoId)
        => await dbContext.AlunosAtividade
            .Include(x => x.Atividade)
                .ThenInclude(x => x.Disciplina)
            .Where(x => x.AlunoId == alunoId)
            .OrderByDescending(x => x.Entrega)
            .ToListAsync();

    public async Task<List<Atividade>> GetAtividades()
        => await dbContext.Atividades
            .Include(x => x.Disciplina)
            .ToListAsync();

    public async Task<Atividade?> GetById(long atividadeId)
        => await dbContext.Atividades
            .Include(x => x.Disciplina)
            .FirstOrDefaultAsync(x => x.Id == atividadeId);

    public async Task EnviarAtividade(Atividade atividade, Aluno aluno, string resposta)
    {
        var entrega = new AlunoAtividade
        {
            AlunoId = aluno.Id,
            AtividadeId = atividade.Id,
            Entrega = DateTime.Now,
            Nota = new Random().Next(1, 10),
            Resposta = resposta
        };
        await dbContext.AlunosAtividade.AddAsync(entrega);
        await dbContext.SaveChangesAsync();
    }
}