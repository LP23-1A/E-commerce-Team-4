import express from "express";
import {
  authLogin,
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controller/auth";
const user = express.Router();
user.route("/").post(createUser).get(getAllUser);
user.route("/auth").post(authLogin);

user.route("/one").post(getUser);
user.route("/:id").put(updateUser).delete(deleteUser);
export { user };
