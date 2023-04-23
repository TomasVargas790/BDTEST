import { Request, Response } from 'express';
import { pool } from '../db/db';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { nanoid } from 'nanoid';

export const getConocimiento = async (req: Request, res: Response) => {

    let conocimientoId: string | number = req.params.id;
    console.log(conocimientoId);

    try {
        const [rs, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query('CALL GetConocimiento(?)', conocimientoId);
        res.send(rs[0]);
    } catch (error) {

        res.send(error);
    }
}
export const insertConocimiento = async (req: Request, res: Response) => {


    const { candidato, lenguaje } = req.body;

    try {
        const [rs] = await pool.query('SELECT InsertConocimiento(?,?,?) AS consulta', [nanoid(),candidato, lenguaje]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
export const deleteConocimiento = async (req: Request, res: Response) => {

    const conocimientoId: string | number = req.params.id;

    try {
        const [result, field]: [ResultSetHeader, FieldPacket[]] = await pool.query('DELETE FROM lista_conocimiento WHERE id_conocimiento = ?', conocimientoId);
        console.log(result);
        if (result.affectedRows < 1) {
            return res.status(404).send('no se encuentra');
        }
        res.status(204).send()
    } catch (error) {

        res.status(500).send('ono' + error);
    }
}

export const updateConocimiento = async (req: Request, res: Response) => {

    const conocimientoId: string | number = req.params.id;
    const { candidato, lenguaje } = req.body;
    try {
        const rs = await pool.query('CALL UpdateConocimiento(?,?,?)', [conocimientoId, candidato, lenguaje]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
