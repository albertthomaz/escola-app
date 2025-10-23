using EscolaApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EscolaApp.Data;

public class EscolaAppDbContext : DbContext
{
    public EscolaAppDbContext(DbContextOptions<EscolaAppDbContext> options) : base(options) {}

    public DbSet<Aluno> Alunos => Set<Aluno>();
    public DbSet<Disciplina> Disciplinas => Set<Disciplina>();
    public DbSet<Atividade> Atividades => Set<Atividade>();
    public DbSet<AlunoAtividade> AlunosAtividade => Set<AlunoAtividade>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AlunoAtividade>()
            .HasKey(aa => new { aa.AlunoId, AtvidadeId = aa.AtividadeId });
        
        modelBuilder.Entity<AlunoAtividade>()
            .HasOne(aa => aa.Aluno)
            .WithMany(a => a.Entregas)
            .HasForeignKey(aa => aa.AlunoId);
        
        modelBuilder.Entity<AlunoAtividade>()
            .HasOne(aa => aa.Atividade)
            .WithMany(a => a.Entregas)
            .HasForeignKey(aa => aa.AtividadeId);
    }
}