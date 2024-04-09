interface Estado {
    nome: string;
    uf: string;
    cod: number;
}

interface Cidade {
    nome: string;
    estado: Estado;
}

interface Endereco {
    logradouro: string;
    bairro: string;
    numero: number;
    complemento?: string;
    referencia?: string;
    cidade: Cidade;
}

const endereco: Endereco = {
    logradouro: "Avenida Paulista",
    bairro: "Brooklin",
    numero: 159,
    complemento: "Apt 205",
    cidade: {
        nome: "Rio Grande",
        estado: {
            nome: "Rio Grande Do Sul",
            uf: "RS",
            cod: 12,
        },
    },
};

console.log(endereco);
