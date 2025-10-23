using EscolaApp.Data;
using EscolaApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EscolaApp.Services;

public class DisciplinaService(EscolaAppDbContext dbContext)
{
    public async Task<List<Disciplina>> GetDisciplinas()
        => await dbContext.Disciplinas
            .Include(x => x.Atividades)
            .ToListAsync();

    public async Task<Disciplina?> GetDisciplina(long disciplinaId, long alunoId)
        => await dbContext.Disciplinas
            .Include(x => x.Atividades)
            .ThenInclude(x => 
                x.Entregas.Where(y => y.AlunoId == alunoId)
            )
            .FirstAsync(x => x.Id == disciplinaId);
}