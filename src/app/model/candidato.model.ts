import baseModel from './base.model';

export interface Candidato extends baseModel{
    nombre: string,
    apellido: string,
    documento: number,
    correo: string,
    telefono: number,
    curriculum: string,
}