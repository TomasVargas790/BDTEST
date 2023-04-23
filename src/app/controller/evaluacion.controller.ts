import { Request, Response } from 'express';
import { pool } from '../db/db';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { nanoid } from 'nanoid';

export const getEvaluacion = async (req: Request, res: Response) => {

    let evaluacionId: string | number = req.params.id;
    console.log(evaluacionId);

    try {
        const [rs, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query('CALL GetEvaluacion(?)', evaluacionId);
        res.send(rs[0]);
    } catch (error) {

        res.send(error);
    }
}
export const insertEvaluacion = async (req: Request, res: Response) => {


    const { candidato, trabajo, resultado, inicio, fin, carpeta, intentos } = req.body;

    try {
        const [rs] = await pool.query('SELECT InsertEvaluacion(?,?,?,?,?,?,?,?) AS consulta', [nanoid(), candidato, trabajo, resultado, inicio, fin, carpeta, intentos]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
export const deleteEvaluacion = async (req: Request, res: Response) => {

    const evaluacionId: string | number = req.params.id;

    try {
        const [result, field]: [ResultSetHeader, FieldPacket[]] = await pool.query('DELETE FROM lista_evaluacion WHERE id_evaluacion = ?', evaluacionId);
        console.log(result);
        if (result.affectedRows < 1) {
            return res.status(404).send('no se encuentra');
        }
        res.status(204).send()
    } catch (error) {

        res.status(500).send('ono' + error);
    }
}

export const updateEvaluacion = async (req: Request, res: Response) => {

    const evaluacionId: string | number = req.params.id;
    const { candidato, trabajo, resultado, inicio, fin, carpeta, intentos  } = req.body;
    try {
        const rs = await pool.query('CALL UpdateEvaluacion(?,?,?,?,?,?,?,?)', [evaluacionId,candidato, trabajo, resultado, inicio, fin, carpeta, intentos ]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
