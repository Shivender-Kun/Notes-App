import { Notes } from "../../models";

const getAllNotes = async (req, res, next) => {
  const { _id } = req.user;

  try {
    // Get all notes from database

    const notes = await Notes.find({ userRef: _id, deleted: false }).select(
      "-__v"
    );

    // if (!notes) return next();

    res.json({
      message: "Notes fetched successfully.",
      data: notes ? notes : [],
    });
  } catch (error) {
    return next(error);
  }
};

export default getAllNotes;
