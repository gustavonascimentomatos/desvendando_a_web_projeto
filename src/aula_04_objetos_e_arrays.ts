interface Pessoas {
    nome: string;
    sobrenome: string;
    idade: number;
}

interface Usuarios {
    pessoa: Pessoas;
    cidade: string;
}

interface Veiculos {
    montadora: string;
    modelo: string;
    anoFabricacao: number;
    anoModelo: number;
}

interface Concessionaria {
    nome: string;
    endereco: string;
    veiculosDisponiveis: Veiculos[];
}

const usuario: Usuarios = {
    pessoa: {
        nome: "Gustavo",
        sobrenome: "Nascimento Matos",
        idade: 28,
    },
    cidade: "Sete Lagoas",
};

const concessionaria: Concessionaria = {
    nome: "T-CAR",
    endereco: "São Paulo",
    veiculosDisponiveis: [
        {
            montadora: "Audi",
            modelo: "RS6",
            anoFabricacao: 2024,
            anoModelo: 2024,
        },
        {
            montadora: "Volkswagen",
            modelo: "Passat Variant",
            anoFabricacao: 2024,
            anoModelo: 2024,
        },
        {
            montadora: "Mercedes-Benz",
            modelo: "C300",
            anoFabricacao: 2018,
            anoModelo: 2018,
        },
    ],
};

console.log(usuario);
console.log(concessionaria);
