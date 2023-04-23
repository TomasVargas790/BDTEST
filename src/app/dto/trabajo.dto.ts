import { Trabajo } from "../model/trabajo.model";

export interface CreateTrabajo extends Omit<Trabajo, 'id' | 'updatedAt' | 'createdAt'> { };

export interface UpdateTrabajo extends Partial<CreateTrabajo> { };

export interface DeleteTrabajo extends Pick<Trabajo, 'id'> { }
