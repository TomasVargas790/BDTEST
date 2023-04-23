import { Candidato } from '../model/candidato.model';
import { CreateCandidato, UpdateCandidato, DeleteCandidato } from '../dto/candidato.dto'
import express from 'express';
import { nanoid } from 'nanoid';
import { CandidatosArray } from '../example';
import { deleteCandidato, getCandidato, insertCandidato, updateCandidato } from '../controller/candidato.controller';


let router = express.Router();

router.get('/', getCandidato);

router.get('/:id', getCandidato);

router.post('/', insertCandidato);

router.patch('/:id', updateCandidato);

router.delete('/:id', deleteCandidato);

export default router
