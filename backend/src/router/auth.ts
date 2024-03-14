import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/auth";
const user = express.Router();
user.route("/").post(createUser).get(getUser);
user.route("/:id").put(updateUser).delete(deleteUser);
export { user };
