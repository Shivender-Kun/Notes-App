class CustomErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static userAlreadyExists(msg = "User already registered!") {
    return new CustomErrorHandler(409, msg);
  }

  static wrongCredentials(msg = "Username/Password error!") {
    return new CustomErrorHandler(401, msg);
  }

  static unAuthorized(msg = "Unauthorized!") {
    return new CustomErrorHandler(401, msg);
  }

  static userNotFound(msg = "User not found!") {
    return new CustomErrorHandler(404, msg);
  }

  static noteDoesNotExist(msg = "Note does not exist!") {
    return new CustomErrorHandler(404, msg);
  }
}

export default CustomErrorHandler;
