import baseModel from './base.model';

export  interface acceso extends baseModel{
    candidatoAcceso: number,
    nick: string,
    hash: string,
    alta: Date,
    expirar: Date,
    estado: Estado
}
type Estado = 1 | 2 | 3 | 4 | 5;