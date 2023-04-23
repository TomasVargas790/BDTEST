import { Request, Response } from 'express';
import { pool } from '../db/db';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { nanoid } from 'nanoid';

export const getInstruccion = async (req: Request, res: Response) => {

    let instruccionId: string | number = req.params.id;
    console.log(instruccionId);

    try {
        const [rs, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query('CALL GetInstruccion(?)', instruccionId);
        res.send(rs[0]);
    } catch (error) {

        res.send(error);
    }
}
export const insertInstruccion = async (req: Request, res: Response) => {


    const { trabajo, titulo, texto, orden } = req.body;

    try {
        const [rs] = await pool.query('SELECT InsertInstruccion(?,?,?,?,?) AS consulta', [nanoid(), trabajo, titulo, texto, orden]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
export const deleteInstruccion = async (req: Request, res: Response) => {

    const instruccionId: string | number = req.params.id;

    try {
        const [result, field]: [ResultSetHeader, FieldPacket[]] = await pool.query('DELETE FROM lista_instruccion WHERE id_instruccion = ?', instruccionId);
        console.log(result);
        if (result.affectedRows < 1) {
            return res.status(404).send('no se encuentra');
        }
        res.status(204).send()
    } catch (error) {

        res.status(500).send('ono' + error);
    }
}

export const updateInstruccion = async (req: Request, res: Response) => {

    const instruccionId: string | number = req.params.id;
    const { trabajo, titulo, texto, orden } = req.body;
    try {
        const rs = await pool.query('CALL UpdateInstruccion(?,?,?,?,?)', [instruccionId, trabajo, titulo, texto, orden]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
