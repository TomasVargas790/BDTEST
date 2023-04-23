import express from 'express';
import { deleteConocimiento, getConocimiento, insertConocimiento, updateConocimiento } from '../controller/conocimiento.controller';


let router = express.Router();

router.get('/:id', getConocimiento);

router.post('/', insertConocimiento);

router.delete('/:id', deleteConocimiento);

router.patch('/:id', updateConocimiento);


export default router
