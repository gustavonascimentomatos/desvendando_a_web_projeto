//type MarcaBicicleta = "Specialized" | "Canyon" | "Cervélo";

enum MarcaBicicleta2 {
    SPECIALIZED = "Specialized",
    CANYON = "Canyon",
    CERVÉLO = "Cervélo",
}

interface Bike {
    marcaBike: MarcaBicicleta2;
}

const bike: Bike = {
    marcaBike: MarcaBicicleta2.CANYON,
};

if (bike.marcaBike === MarcaBicicleta2.CANYON) {
    console.log("É Canyon!");
}
