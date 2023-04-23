import express from 'express';
import { deleteEvaluacion, getEvaluacion, insertEvaluacion, updateEvaluacion } from '../controller/evaluacion.controller';


let router = express.Router();

router.get('/:id', getEvaluacion);

router.post('/', insertEvaluacion);

router.delete('/:id', deleteEvaluacion);

router.patch('/:id', updateEvaluacion);


export default router
