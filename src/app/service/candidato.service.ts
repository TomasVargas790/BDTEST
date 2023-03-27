import { Candidato } from '../model/candidato.model';
import { CreateCandidato, updateCandidato, deleteCandidato } from '../dto/candidato.dto'
import express from 'express';
import nanoid from 'nanoid';
import { CandidatosArray } from '../example';

let candidatoRouter = express.Router();

candidatoRouter.get('/get/:id', (req, res) => {

    let candidatoId: string | number = req.params.id;


    candidatoId = CandidatosArray[0].id;

    CandidatosArray.find(Candidato => {
        if (Candidato.id == candidatoId) return res.send(Candidato)
        else return res.send('ono')
    });


});
/*
candidatoRouter.post('/register', (req, res) => {

});

candidatoRouter.post('/login', (req, res) => {

});



candidatoRouter.put('/update/:id', (req, res) => {

});

candidatoRouter.delete('/delete/:id', (req, res) => {

});
*/
export default candidatoRouter;

