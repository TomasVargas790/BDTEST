import { Request, Response } from 'express';
import { pool } from '../db/db';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { nanoid } from 'nanoid';

export const getTrabajo = async (req: Request, res: Response) => {

    let trabajoId: string | number = req.params.id;
    console.log(trabajoId);

    try {
        const [rs, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query('CALL GetTrabajo(?)', trabajoId);
        res.send(rs[0]);
    } catch (error) {

        res.send(error);
    }
}
export const insertTrabajo = async (req: Request, res: Response) => {


    const { lenguaje, nombre, titulo, url, archivo, order } = req.body;

    try {
        const [rs] = await pool.query('SELECT InsertTrabajo(?,?,?,?,?,?,?) AS consulta', [nanoid(), lenguaje, nombre, titulo, url, archivo, order]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
export const deleteTrabajo = async (req: Request, res: Response) => {

    const trabajoId: string | number = req.params.id;

    try {
        const [result, field]: [ResultSetHeader, FieldPacket[]] = await pool.query('DELETE FROM lista_trabajo WHERE id_trabajo = ?', trabajoId);
        console.log(result);
        if (result.affectedRows < 1) {
            return res.status(404).send('no se encuentra');
        }
        res.status(204).send()
    } catch (error) {

        res.status(500).send('ono' + error);
    }
}

export const updateTrabajo = async (req: Request, res: Response) => {

    const trabajoId: string | number = req.params.id;
    const { lenguaje, nombre, titulo, url, archivo, order } = req.body;
    try {
        const rs = await pool.query('CALL UpdateTrabajo(?,?,?)', [trabajoId, lenguaje, nombre, titulo, url, archivo, order]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
