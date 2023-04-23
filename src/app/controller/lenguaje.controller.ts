import { Request, Response } from 'express';
import { pool } from '../db/db';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { nanoid } from 'nanoid';

export const getLenguaje = async (req: Request, res: Response) => {

    let lenguajeId: string | number = req.params.id;

    try {
        const [rs, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query('CALL GetLenguaje(?)', lenguajeId);
        res.send(rs[0]);
    } catch (error) {

        res.send(error);
    }
}
export const insertLenguaje = async (req: Request, res: Response) => {


    const { nombre, logo, version } = req.body;

    try {
        const [rs] = await pool.query('SELECT InsertLenguaje(?,?,?,?) AS consulta', [nanoid(),nombre, logo, version]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
export const deleteLenguaje = async (req: Request, res: Response) => {

    const lenguajeId: string | number = req.params.id;

    try {
        const [result, field]: [ResultSetHeader, FieldPacket[]] = await pool.query('DELETE FROM lista_lenguaje WHERE id_lenguaje = ?', lenguajeId);
        console.log(result);
        if (result.affectedRows < 1) {
            return res.status(404).send('no se encuentra');
        }
        res.status(204).send()
    } catch (error) {

        res.status(500).send('ono' + error);
    }
}

export const updateLenguaje = async (req: Request, res: Response) => {

    const lenguajeId: string | number = req.params.id;
    const { nombre, logo, version } = req.body;
    try {
        const rs = await pool.query('CALL UpdateLenguaje(?,?,?)', [lenguajeId, nombre, logo, version]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
