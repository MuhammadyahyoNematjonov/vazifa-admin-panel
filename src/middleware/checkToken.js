import userModel from "../models/usersModel.js";
import { CustomError, ValidationError, NotFoundError, ForbiddenError } from "../utils/error.js";
import jwt from "../utils/jwt.js";

export default async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) throw new ValidationError(400, "Token is required");

    const { user_id, userIp, userAgent } = jwt.verify(token);

    const user = await userModel.findById(user_id);
    if (!user) throw new NotFoundError(404, "User not found");

    if (req.ip !== userIp || req.headers["user-agent"] !== userAgent) {
      throw new ForbiddenError(403, "Unauthorized: Device mismatch");
    }

    req.userId = user_id;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(new ForbiddenError(401, "Token expired"));
    }
    if (error.name === "JsonWebTokenError") {
      return next(new ForbiddenError(401, "Invalid token"));
    }
    next(error);
  }
};
