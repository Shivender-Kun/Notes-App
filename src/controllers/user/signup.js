import Joi from "joi";

import { Users } from "../../models";
import {
  CustomErrorHandler,
  HashingUtility,
  TokenUtility,
} from "../../services";

// Checklist
// [ ] Validate the request
// [ ] Check if user is already in db
// [ ] Generate password hash
// [ ] Create new user model & save in db
// [ ] Generate jwt token
// [ ] Send response

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Validation
  const userSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    confirmPassword: Joi.ref("password"),
  });

  const { error } = userSchema.validate(req.body);

  if (error) return next(error);

  try {
    // Check if user already registered in database

    const userAlreadyExists = await Users.findOne({ email });

    if (userAlreadyExists) return next(CustomErrorHandler.userAlreadyExists());

    //  Generate password hash

    const hashedPassword = await HashingUtility.generateHash(password);

    // Create new user model and save in db

    const newUser = new Users({ name, email, password: hashedPassword });

    const result = await newUser.save();

    //  Generate jwt token

    const accessToken = await TokenUtility.generateToken(
      {
        _id: result._id,
        name,
        email,
        role: result.role,
      },
      "7d"
    );

    // Send response

    return res.json({ message: "User signed up successfully.", accessToken });
  } catch (error) {
    return next(error);
  }
};

export default signup;
