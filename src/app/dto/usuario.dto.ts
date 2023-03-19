import { Usuario } from '../model/usuario.model';

export interface CreateUsuario extends Omit<Usuario, 'id' | 'updatedAt' | 'createdAt'> { };

export interface updateUsuario extends Partial<CreateUsuario> { };

export interface deleteUsuario extends Pick<Usuario, 'id'> { }

