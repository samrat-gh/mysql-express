import { Router } from "express";
import {
  createNote,
  getNotes,
  getNotesById,
} from "../controllers/sql.controller";

const router = Router();

router.get("/getnotes", getNotes);
router.post("/getnotebyid", getNotesById);
router.post("/createnote", createNote);

export default router;
