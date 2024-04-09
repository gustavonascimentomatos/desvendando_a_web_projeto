const funcaoCallback = (nome: string): void => {
    console.log("Entrou na função de Callback!: " + nome);
};

const funcaoDeTeste = (
    valor1: number,
    valor2: number,
    callback: (nome: string) => void,
): string => {
    if (valor1 > valor2) {
        callback("Gustavo");
    }
    return "";
};

funcaoDeTeste(10, 1, funcaoCallback);
funcaoDeTeste(11, 1, (nome: string) => {
    console.log("Entrou na Função de Callback Anônima!: " + nome);
});
