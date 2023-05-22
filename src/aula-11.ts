class Escola {
  public readonly nome: string;
  private readonly alunos: Aluno[];

  constructor(nome: string) {
    this.nome = nome;
    this.alunos = [];
  }

  public adicionarAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }
}

class Aluno {
  constructor(public readonly nome: string) {}
}

const escola = new Escola("NOVA ESCOLA");
// const aluno1 = new Aluno("José");
// const aluno2 = new Aluno("Maria");
// const aluno3 = new Aluno("Joao");

escola.adicionarAluno(new Aluno("José"));
escola.adicionarAluno(new Aluno("Maria"));
escola.adicionarAluno(new Aluno("Joao"));
escola.adicionarAluno(new Aluno("Novo aluno"));

console.log("escola", escola);
