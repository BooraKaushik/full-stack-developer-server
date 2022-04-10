import express from "express";
import cors from "cors";
import helloController from "./controllers/hello-controller.js";
import tuitController from "./controllers/tuit-controller.js";
import userController from "./controllers/user-controller.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());
tuitController(app);
helloController(app);
userController(app);
// app.get("/hello", (req, res) => {
//   res.send("Hello World! Life is good!");
// });
app.get("/", (req, res) => {
  res.send("Welcome to Full Stack Development!");
});
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/webdev";
mongoose.connect(CONNECTION_STRING);
app.listen(process.env.PORT || 4000);
