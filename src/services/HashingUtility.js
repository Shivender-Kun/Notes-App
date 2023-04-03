import bcrypt from "bcrypt";

// Password hashing utility

class HashingUtility {
  // Generate hash with user password
  static generateHash(password, saltRounds = 10) {
    return bcrypt.hash(password, saltRounds);
  }

  // Compare user password with the hash present in db
  static decryptHash(password, hash) {
    return bcrypt.compare(password, hash);
  }
}

export default HashingUtility;
