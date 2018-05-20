import { Tipo } from "./tipo";
import { Servico } from "./servico";
import { Atendimento } from "./Atendimento";

export interface Senha{

    id : number;
    senha: string;
    dtRegistro: Date;
    tipo : Tipo;
    servico: Servico;
    atendimento: Atendimento;
}