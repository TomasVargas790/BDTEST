import { Candidato } from "../model/candidato.model";

export interface CreateCandidato extends Omit<Candidato, 'id' | 'updatedAt' | 'createdAt'> { };

export interface updateCandidato extends Partial<CreateCandidato> { };

export interface deleteCandidato extends Pick<Candidato, 'id'> { }
