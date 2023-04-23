import { Usuario } from '../model/usuario.model';

export interface CreateUsuario extends Omit<Usuario, 'id' | 'updatedAt' | 'createdAt'> { };

export interface UpdateUsuario extends Partial<CreateUsuario> { };

export interface DeleteUsuario extends Pick<Usuario, 'id'> { }

