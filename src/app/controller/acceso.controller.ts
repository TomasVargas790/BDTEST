import { Request, Response } from 'express';
import { CreateAcceso } from '../dto/acceso.dto'
import { Acceso } from '../model/acceso.model';
import { nanoid } from 'nanoid'
import { pool } from '../db/db';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { log } from 'console';


export const loginAcceso = async (req: Request, res: Response) => {

}

export const getAcceso = async (req: Request, res: Response) => {

    let accesoId: string | number = req.params.id;
    console.log(accesoId);

    try {
        const [rs, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query('CALL GetAcceso(?)', accesoId);
        res.send(rs[0]);
    } catch (error) {

        res.send(error);
    }
}
export const insertAcceso = async (req: Request, res: Response) => {


    const { candidato, nick, hash } = req.body;

    try {
        const [rs] = await pool.query('SELECT InsertAcceso(?,?,?,?) AS consulta', [nanoid(), candidato, nick, hash]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
export const deleteAcceso = async (req: Request, res: Response) => {

    const accesoId: string | number = req.params.id;

    try {
        const [result, field]: [ResultSetHeader, FieldPacket[]] = await pool.query('DELETE FROM lista_acceso WHERE id_acceso = ?', accesoId);
        console.log(result);
        if (result.affectedRows < 1) {
            return res.status(404).send('no se encuentra');
        }
        res.status(204).send()
    } catch (error) {

        res.status(500).send('ono' + error);
    }
}

export const updateAcceso = async (req: Request, res: Response) => {

    const accesoId: string | number = req.params.id;
    const { nick, hash, estado } = req.body;
    try {
        const rs = await pool.query('CALL UpdateAcceso(?,?,?,?)', [accesoId,nick, hash, estado]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
