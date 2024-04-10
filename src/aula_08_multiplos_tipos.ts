class Caminhao {
    montadora: string;
    modelo: string;
    carga: boolean;
    anoFabricacao: number;
    anoModelo: number;
    eixos: number;

    constructor() {
        this.montadora = "Volkswagen";
        this.modelo = "1013";
        this.carga = true;
        this.anoFabricacao = 2014;
        this.anoModelo = 2014;
        this.eixos = 2;
    }
}

interface Carro {
    montadora: string;
    modelo: string;
    passeio: boolean;
    anoFabricacao: number;
    anoModelo: number;
}

interface Bicicleta {
    fabricante: string;
    modelo: string;
    tamanho: number;
}

const funcaoCarroBicicleta = (validacao: string): Carro | Bicicleta | Caminhao => {
    if (validacao === "Carro") {
        return {
            montadora: "Volkswagen",
            modelo: "Passat Variant",
            passeio: true,
            anoFabricacao: 2014,
            anoModelo: 2014,
        };
    } else if (validacao === "Bicicleta") {
        return {
            fabricante: "Pinarello",
            modelo: "X1 105",
            tamanho: 52,
        };
    }
    return {
        montadora: "Volkswagen",
        modelo: "1013",
        carga: true,
        anoFabricacao: 2009,
        anoModelo: 2009,
        eixos: 2,
    };
};

const resultado = funcaoCarroBicicleta("dasda");

if (resultado instanceof Caminhao) {
    console.log(`Montadora: ${resultado.montadora}`);
    console.log(`Modelo: ${resultado.modelo}`);
    console.log(`Eixos: ${resultado.eixos}`);
}

if ("passeio" in resultado) {
    console.log(`Montadora: ${resultado.montadora}`);
    console.log(`Modelo: ${resultado.modelo}`);
}

if ("fabricante" in resultado) {
    console.log(`Fabricante: ${resultado.fabricante}`);
    console.log(`Modelo: ${resultado.modelo}`);
}
