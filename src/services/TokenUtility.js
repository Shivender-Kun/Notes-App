import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

// Authentication token utility

class TokenUtility {
  // Generating authentication token for users
  static generateToken(payload, expiresIn = "60s", secret = JWT_SECRET) {
    return jwt.sign(payload, secret, { expiresIn });
  }

  // Decoding authentication token sent by users
  static decodetoken(token, secret = JWT_SECRET) {
    return jwt.decode(token, secret);
  }
}

export default TokenUtility;
