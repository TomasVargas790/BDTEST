import { Acceso } from "../model/acceso.model";

export interface CreateAcceso extends Omit<Acceso, 'id' | 'updatedAt' | 'createdAt'> { };

export interface updateAcceso extends Partial<CreateAcceso> { };

export interface deleteAcceso extends Pick<Acceso, 'id'> { }
