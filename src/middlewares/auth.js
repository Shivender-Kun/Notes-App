import { CustomErrorHandler, TokenUtility } from "../services";

const checkAuthToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return next(CustomErrorHandler.unAuthorized());

  const token = authorization.split(" ")[1];

  try {
    const { _id, role } = TokenUtility.decodetoken(token);

    req.user = { _id, role };

    next();
  } catch (error) {
    return next(CustomErrorHandler.unAuthorized());
  }
};

export default checkAuthToken;

{
  /* Token format supported 
Authorization = "Bearer ${token}" */
}
