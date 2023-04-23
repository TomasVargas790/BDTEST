import { Request, Response } from 'express';
import { pool } from '../db/db';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { nanoid } from 'nanoid';

export const loginAcceso = async (req: Request, res: Response) => {

}

export const getUsuario = async (req: Request, res: Response) => {

    let usuarioId: string | number = req.params.id;

    try {
        const [rs, fields]: [RowDataPacket[], FieldPacket[]] = await pool.query('CALL GetUsuario(?)', usuarioId);
        res.send(rs[0]);
    } catch (error) {

        res.send(error);
    }
}
export const insertUsuario = async (req: Request, res: Response) => {


    const { nombre, apellido, rol, nick, hash, correo } = req.body;

    try {
        const [rs] = await pool.query('SELECT InsertUsuario(?,?,?,?,?,?) AS consulta', [nanoid(), nombre, apellido, rol, nick, hash, correo]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
export const deleteUsuario = async (req: Request, res: Response) => {

    const usuarioId: string | number = req.params.id;

    try {
        const [result, field]: [ResultSetHeader, FieldPacket[]] = await pool.query('DELETE FROM lista_usuario WHERE id_usuario = ?', usuarioId);
        console.log(result);
        if (result.affectedRows < 1) {
            return res.status(404).send('no se encuentra');
        }
        res.status(204).send()
    } catch (error) {

        res.status(500).send('ono' + error);
    }
}

export const updateUsuario = async (req: Request, res: Response) => {

    const usuarioId: string | number = req.params.id;
    const { nombre, apellido, rol, nick, hash, correo } = req.body;
    try {
        const rs = await pool.query('CALL UpdateUsuario(?,?,?,?,?,?)', [usuarioId, nombre, apellido, rol, nick, hash, correo]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
