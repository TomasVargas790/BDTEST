import { Request, Response } from 'express';
import { CreateCandidato } from '../dto/candidato.dto'
import { Candidato } from '../model/candidato.model';
import { nanoid } from 'nanoid'
import { pool } from '../db/db';
import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';

export const getCandidato = async (req: Request, res: Response) => {

    let candidatoId: string | number = req.params.id ?? 0;
    console.log(candidatoId);

    try {
        const [rs,fields]:[RowDataPacket[],FieldPacket[]] = await pool.query('CALL GetCandidato(?)', candidatoId);
        res.send(rs[0]);
    } catch (error) {

        res.send(error);
    }
}
export const insertCandidato = async (req: Request, res: Response) => {


    const { nombre, apellido, documento, correo, telefono, curriculum } = req.body;

    try {
        const [rs] = await pool.query('SELECT InsertCandidato(?,?,?,?,?,?,?) AS consulta', [nanoid(), nombre, apellido, documento, correo, telefono, curriculum]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
export const deleteCandidato = async (req: Request, res: Response) => {

    const candidatoId: string | number = req.params.id;

    try {
        const [result, field]: [ResultSetHeader, FieldPacket[]] = await pool.query('DELETE FROM lista_candidato WHERE id_candidato = ?', candidatoId);
        console.log(result);
        if (result.affectedRows < 1) {
            return res.status(404).send('no se encuentra');
        }
        res.status(204).send()
    } catch (error) {

        res.status(500).send('ono' + error);
    }
}

export const updateCandidato = async (req: Request, res: Response) => {

    const candidatoId: string | number = req.params.id;
    const { nombre, apellido, documento, correo, telefono, curriculum } = req.body;
    try {
        const rs = await pool.query('CALL UpdateCandidato(?,?,?,?,?,?,?)', [candidatoId, nombre, apellido, documento, correo, telefono, curriculum]);
        res.send(rs);
    } catch (error) {

        res.send(error);
    }
}
