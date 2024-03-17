import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/auth";
const user = express.Router();
user.route("/").post(createUser);
user.route("/one").post(getUser);
user.route("/:id").put(updateUser).delete(deleteUser);
export { user };
