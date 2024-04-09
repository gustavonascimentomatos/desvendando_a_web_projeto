interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
    isMaiorIdade: boolean;
}

const pessoa: Pessoa = {
    nome: "Gustavo",
    sobrenome: "Nascimento Matos",
    idade: 28,
    isMaiorIdade: true,
};

console.log(pessoa);
