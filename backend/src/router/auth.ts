import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/auth";
const admin = express.Router();
admin.route("/").post(createUser).get(getUser);
admin.route("/:id").put(updateUser).delete(deleteUser);
export { admin };
