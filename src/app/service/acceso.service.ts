import express from 'express';
import { deleteAcceso, getAcceso, insertAcceso, updateAcceso ,loginAcceso } from '../controller/acceso.controller';


let router = express.Router();

router.get('/:id', getAcceso);

router.post('/register', insertAcceso);

router.post('/login', loginAcceso);

router.delete('/:id', deleteAcceso);

router.patch('/:id', updateAcceso);


export default router
