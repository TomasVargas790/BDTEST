import express from 'express';
import { deleteTrabajo, getTrabajo, insertTrabajo, updateTrabajo } from '../controller/trabajo.controller';


let router = express.Router();

router.get('/:id', getTrabajo);

router.post('/', insertTrabajo);

router.delete('/:id', deleteTrabajo);

router.put('/:id', updateTrabajo);


export default router
