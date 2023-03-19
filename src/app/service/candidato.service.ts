import { Candidato } from '../model/candidato.model';
import { CreateCandidato, updateCandidato, deleteCandidato } from '../dto/candidato.dto'
import express from 'express';
import nanoid from 'nanoid';

let router = express.Router();

router.post('./register', (req, res) => {

});

router.post('./login', (req, res) => {

});

router.get('./get/:id', (req, res) => {
    let { reqCandidato }: { reqCandidato: Candidato } = req.body;

    let returnCandidato: Candidato = reqCandidato;
    res.send(returnCandidato)
});

router.put('./update/:id', (req, res) => {

});

router.delete('./delete/:id', (req, res) => {

});


