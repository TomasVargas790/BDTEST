import baseModel from './base.model'

type Rol = 1 | 2; 

export interface Usuario extends baseModel {
    nombre: string,
    apellido: string,
    rol: Rol,
    nick: string,
    hash: string,
    correo: string,
}

