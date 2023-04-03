import Joi from "joi";

import { CustomErrorHandler } from "../../services";
import { Notes } from "../../models";

const updateNote = async (req, res, next) => {
  const { noteRef } = req.body;

  // Validation

  const noteSchema = Joi.object({
    noteRef: Joi.string().required(),
    title: Joi.string(),
    description: Joi.string(),
    backgroundColor: Joi.string().min(4).max(9),
    labels: Joi.array(),
  });

  const { error } = noteSchema.validate(req.body);

  if (error) return next(error);

  // Update note in database

  const updatedNote = await Notes.findByIdAndUpdate(
    noteRef,
    { ...req.body },
    { new: true }
  );

  if (!updatedNote) return next(CustomErrorHandler.noteDoesNotExist());

  return res.json({
    message: "Note updated successfully.",
    data: updatedNote ? updatedNote : {},
  });

  try {
  } catch (error) {
    return next(error);
  }
};

export default updateNote;
