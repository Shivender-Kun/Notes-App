import Joi from "joi";

import { Notes } from "../../models";

const createNote = async (req, res, next) => {
  const { title, description } = req.body;
  const { _id } = req.user;

  // Validate

  const noteSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
  });

  const { error } = noteSchema.validate(req.body);

  if (error) return next(error);

  try {
    // Create note in database

    const newNote = new Notes({
      title,
      description,
      userRef: _id,
    });

    const result = await newNote.save();

    res.json({ message: "Note created successfully.", data: result });
  } catch (error) {
    return next(error);
  }
};

export default createNote;
