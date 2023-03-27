import { Faker, faker } from '@faker-js/faker';
import { CandidatosArray } from './example'
import candidatoRouter from './service/candidato.service'
import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

let expressApp = Express();

expressApp.use('/candidato', candidatoRouter);


expressApp.listen(PORT, () => {
    console.log('Servidor funcionando en puerto ' + PORT);

});
