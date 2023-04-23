import { Candidato } from "../model/candidato.model";

export interface CreateCandidato extends Omit<Candidato, 'id' | 'updatedAt' | 'createdAt'> { };

export interface UpdateCandidato extends Partial<CreateCandidato> { };

export interface DeleteCandidato extends Pick<Candidato, 'id'> { }
