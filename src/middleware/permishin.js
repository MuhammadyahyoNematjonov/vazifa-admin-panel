import { permissionModel } from "../models/permishin.js";
import { ForbiddenError } from "../utils/error.js";

export default async (req, res, next) => {
  try {
    const actionMap = {
      GET: "read",
      POST: "write",
      PUT: "update",
      DELETE: "delete"
    };

    const { role, _id } = req.user;
    const { branch_id } = req.body;

    // SuperAdminga cheklovlar taalluqli emas
    if (role === "SuperAdmin") {
      return next();
    }

    // Ruxsat turi — endpoint nomi (masalan: create, delete)
    const permissionName = req.url.split("/").at(-1);

    const userPermission = await permissionModel.findOne({
      user_id: _id,
      permissionName,
      branch_id
    });

    // Ruxsat topilmasa yoki harakatga mos kelmasa
    if (!userPermission || !userPermission.actions.includes(actionMap[req.method])) {
      throw new ForbiddenError(403, "You are not allowed");
    }

    next();
  } catch (error) {
    next(error);
  }
};
