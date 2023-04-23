import { Acceso } from "../model/acceso.model";

export interface CreateAcceso extends Omit<Acceso, 'id' | 'updatedAt' | 'createdAt'> { };

export interface UpdateAcceso extends Partial<CreateAcceso> { };

export interface DeleteAcceso extends Pick<Acceso, 'id'> { }
