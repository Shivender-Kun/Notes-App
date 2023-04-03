import Joi from "joi";

import { CustomErrorHandler } from "../../services";
import { Notes } from "../../models";

const getOneNote = async (req, res, next) => {
  const { noteRef } = req.body;

  // Validation

  const noteSchema = Joi.object({
    noteRef: Joi.string().required(),
  });

  const { error } = noteSchema.validate(req.body);

  if (error) return next(error);

  try {
    // Get note from database

    const note = await Notes.findOne({ _id: noteRef });

    if (!note) return next(CustomErrorHandler.noteDoesNotExist());

    // Send response

    return res.json({
      message: "Note fetched successfully.",
      data: note ? note : {},
    });
  } catch (error) {
    return next(error);
  }
};

export default getOneNote;
