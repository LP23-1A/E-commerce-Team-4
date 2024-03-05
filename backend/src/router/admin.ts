import express from "express";
import {
  createAdmin,
  deleteAdmin,
  getAdmin,
  updateAdmin,
} from "../controller/admin";
const admin = express.Router();
admin.route("/").post(createAdmin).get(getAdmin);
admin.route("/:id").put(updateAdmin);
admin.route("/delete").delete(deleteAdmin);
export { admin };
