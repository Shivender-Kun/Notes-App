import Joi from "joi";

import { Users } from "../../models";
import {
  CustomErrorHandler,
  HashingUtility,
  TokenUtility,
} from "../../services";

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  // Validation

  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  });

  const { error } = loginSchema.validate(req.body);

  if (error) return next(error);

  try {
    // Check if user in database

    const user = await Users.findOne({ email });

    if (!user)
      return next(CustomErrorHandler.wrongCredentials("User email not found!"));

    // Match password with hash

    const matchPassword = await HashingUtility.decryptHash(
      password,
      user.password
    );

    if (!matchPassword)
      return next(CustomErrorHandler.wrongCredentials("Wrong password!"));

    // Generate jwt token

    const accessToken = await TokenUtility.generateToken(
      {
        name: user.name,
        email,
        _id: user._id,
        role: user.role,
      },
      "7d"
    );

    // Send response

    return res.json({ message: "Sign in successfull.", accessToken });
  } catch (error) {
    return next(error);
  }
};

export default signin;
