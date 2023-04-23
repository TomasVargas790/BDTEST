import { Usuario } from '../model/usuario.model';
import { CreateUsuario, UpdateUsuario, DeleteUsuario } from '../dto/usuario.dto'
import express from 'express';
import { getUsuario, loginAcceso, insertUsuario, deleteUsuario, updateUsuario } from '../controller/usuario.controller';


let router = express.Router();

router.get('/:id', getUsuario);

router.post('/register', insertUsuario);

router.post('/login', loginAcceso);

router.delete('/:id', deleteUsuario);

router.patch('/:id', updateUsuario);

export default router
