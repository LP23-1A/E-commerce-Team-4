import express from "express";
import cors from "cors";

import { connectDatabase } from "./utils/database";
import { admin } from "./router/admin";
const PORT = 8000;
connectDatabase();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/admin", admin);
app.get("/", (req, res) => {
  res.status(200).send({ success: true, message: "hello world" });
});
app.listen(PORT, () => {
  console.log("server running");
});
