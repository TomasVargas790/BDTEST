import baseModel from './base.model'

export interface Usuario extends baseModel {
    nombre: string,
    apellido: string,
    rol: Rol,
    nick: string,
    hash: string,
    correo: string,
}

type Rol = 1 | 2; 
