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
    //Metodo contraido para criar a classe já com construtor
    //constructor(public readonly nome: string){}
    public readonly nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

const escola = new Escola("Escola Estadual Francisco de Assis");
const aluno_1 = new Aluno("Gustavo Nascimento Matos");
const aluno_2 = new Aluno("Kayrus Vinivius Rossati");
const aluno_3 = new Aluno("Pablo Pereira Fernandes");

escola.adicionarAluno(aluno_1);
escola.adicionarAluno(aluno_2);
escola.adicionarAluno(aluno_3);

//Adiciona na escola, mas não cria o aluno fora
escola.adicionarAluno(new Aluno("Paola Pereira Fernandes"));

console.log(escola);
