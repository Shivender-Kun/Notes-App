import { Notes } from "../../models";
import { CustomErrorHandler } from "../../services";

const deleteNote = async (req, res, next) => {
  const { noteRef } = req.body;

  // check if noteRef is provided
  if (!noteRef) return next(CustomErrorHandler.noteDoesNotExist());

  try {
    // Check if note exists in database

    const note = await Notes.findOneAndUpdate(
      { _id: noteRef, deleted: false },
      { deleted: true },
      { new: true }
    );

    if (!note) return next(CustomErrorHandler.noteDoesNotExist());

    res.json({ message: "Note deleted successfully.", data: note });
  } catch (error) {
    return next(error);
  }
};

export default deleteNote;
