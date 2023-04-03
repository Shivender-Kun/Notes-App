import { Router } from "express";
import notesController from "../../controllers/notes";
import { auth } from "../../middlewares";

const router = Router();

router.post("/create", auth, notesController.createNote);
router.put("/update", auth, notesController.updateNote);
router.delete("/delete", auth, notesController.deleteNote);
router.get("/getAll", auth, notesController.getAllNotes);
router.get("/getOne", auth, notesController.getOneNote);

export default router;
