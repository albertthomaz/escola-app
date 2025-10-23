using EscolaApp.Data;
using EscolaApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EscolaApp.Services;

public class AlunoService(EscolaAppDbContext dbContext)
{
    public async Task<Aluno?> GetAluno(string matricula, string senha)
        => await dbContext.Alunos.FirstOrDefaultAsync(x => x.Matricula == matricula && x.Senha == senha);
    
}