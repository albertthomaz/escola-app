# EscolaApp

Este diretório contém a solução do projeto EscolaApp, desenvolvida utilizando **.NET 9**. A solução é composta por dois projetos:

- `EscolaApp` — Projeto principal contendo a lógica de domínio e regras de negócio.
- `EscolaApp.Tests` — Projeto de testes unitários.

---

## ⚙️ Como Compilar e Executar o Projeto

> Requisitos: [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) instalado.

1. Navegue até o diretóriodo projeto:

   ```bash
   cd EscolaApp
   ```
2. Compile a solução:

   ```bash
   dotnet build
   ```
3. Execute o projeto principal:

   ```bash
   dotnet run --project EscolaApp
   ```

## 🧪 Como executar os testes

A solução contém dois projetos de testes: unitários e de integração. Para executá-los:

```bash
dotnet test
```

Isso executará todos os testes em `EscolaApp.Tests`
