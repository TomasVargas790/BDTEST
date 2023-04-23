import express from 'express';
import { deleteInstruccion, getInstruccion, insertInstruccion, updateInstruccion } from '../controller/instruccion.controller';


let router = express.Router();

router.get('/:id', getInstruccion);

router.post('/', insertInstruccion);

router.delete('/:id', deleteInstruccion);

router.patch('/:id', updateInstruccion);


export default router
