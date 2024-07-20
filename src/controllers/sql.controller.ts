import { Request, Response } from "express";

import { pool } from "../db/db";

const getNotes = async (req: Request, res: Response) => {
  const [notes] = await pool.query("SELECT * from notes");

  return res.status(200).json({
    status: true,
    data: notes,
  });
};

const getNotesById = async (req: Request, res: Response) => {
  console.log("hi");
  const { id } = req.body;
  // const [notes] = await pool.query(`SELECT * from notes WHERE id=${id}`);

  // It is better approach then the upper one because upper one allows sql injection by aceepting any value
  // from user
  const [notes] = await pool.query(`SELECT * from notes WHERE id=?`, [id]);
  console.log(notes);

  return res.status(200).json({
    status: true,
    data: notes,
  });
};

const createNote = async (req: Request, res: Response) => {
  const { title, content } = await req.body;

  console.log({
    title,
    content,
  });
  const [result] = await pool.query(
    `INSERT INTO notes (title, contents) VALUES (?,  ?)`,
    [title, content]
  );

  //@ts-ignore
  console.log(result?.insertId);
  const data = await pool.query("SELECT * from notes WHERE id=?", [
    //@ts-ignore
    result?.insertId,
  ]);

  console.log(data);

  return res.status(200).json({
    status: true,
    data: data[0],
  });
};

export { getNotes, createNote, getNotesById };
