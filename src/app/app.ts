import candidatoRouter from './service/candidato.service';
import conocimientoRouter from './service/conocimiento.service';
import accesoRouter from './service/acceso.service';
import lenguajeRouter from './service/lenguaje.service';
import trabajoRouter from './service/trabajo.service';
import instruccionRouter from './service/instruccion.service';
import evaluacionRouter from './service/evaluacion.service'
import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

let expressApp = Express();

expressApp.use(Express.json());

expressApp.use('/candidato', candidatoRouter);
expressApp.use('/acceso', conocimientoRouter);
expressApp.use('/conocimiento', accesoRouter);
expressApp.use('/lenguaje', lenguajeRouter);
expressApp.use('/trabajo', trabajoRouter);
expressApp.use('/instruccion', instruccionRouter);
expressApp.use('/evaluacion', evaluacionRouter);


expressApp.listen(PORT, () => {
    console.log('Servidor funcionando en puerto ' + PORT);
});
