import { Trabajo } from "../model/trabajo.model";

export interface createTrabajo extends Omit<Trabajo, 'id' | 'updatedAt' | 'createdAt'> { };

export interface updateTrabajo extends Partial<createTrabajo> { };

export interface deleteTrabajo extends Pick<Trabajo, 'id'> { }
