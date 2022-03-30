export interface IRespuesta {
    tipoDeCalculo: string;
    resultado: number;
    figura: string;
    parametros: ParametrosDeEntrada[];
}

interface ParametrosDeEntrada {
    [key: string]: number;
}