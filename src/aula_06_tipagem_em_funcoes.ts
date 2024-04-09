interface ObejtoQualquer {
    funcao: (parametro1: number, parametro2: number) => number;
}

const funcaoTeste = (parametro1: number, parametro2: number): number => {
    if (parametro1 > parametro2) {
        return parametro1;
    } else if (parametro2 > parametro1) {
        return parametro2;
    } else {
        return parametro1;
    }
};

const teste: ObejtoQualquer = {
    funcao: funcaoTeste,
};

console.log(teste.funcao(1, 4));
