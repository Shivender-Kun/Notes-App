import createNote from "./create";
import deleteNote from "./delete";
import getOneNote from "./getOne";
import getAllNotes from "./getAll";
import updateNote from "./update";

const notesController = {
  createNote,
  deleteNote,
  getOneNote,
  getAllNotes,
  updateNote,
};

export default notesController;
