import express from 'express';
import { deleteLenguaje, getLenguaje, insertLenguaje, updateLenguaje } from '../controller/lenguaje.controller';


let router = express.Router();

router.get('/:id', getLenguaje);

router.post('/', insertLenguaje);

router.delete('/:id', deleteLenguaje);

router.patch('/:id', updateLenguaje);


export default router
