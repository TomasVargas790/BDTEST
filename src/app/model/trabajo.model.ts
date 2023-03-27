import baseModel from "./base.model";

interface Lenguaje extends baseModel {
    nombre: string,
    logo: string,
    version: string
};

export interface Trabajo extends baseModel {
    id: string,
    lenguaje: Lenguaje,
    nombre:string,
    titulo:string,
    url:string,
    archivo:string,     
    orden:number
}
