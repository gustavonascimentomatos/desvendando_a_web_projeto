let test;

interface Andar {
    passos?: number;
}

const andar: Andar = {
    passos: 5,
};

const funcaoAula09_1 = (): void => {
    console.log("Função Teste Aula 09!");
};

const funcaoAula09_2 = (): undefined | number => {
    if (andar.passos === 5) {
        return 5;
    }
    return undefined;
};

if (test === null) {
    console.log(`test é Nulo`);
} else {
    console.log(`test não é Nulo, é: ${test}`);
}

const retorno = funcaoAula09_2();

retorno?.toFixed();

console.log(funcaoAula09_1());
console.log(andar);
console.log(retorno);
