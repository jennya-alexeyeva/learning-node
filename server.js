import express from 'express'
import cors from 'cors';
import bodyParser from "body-parser";
import helloController
  from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(bodyParser.json());
helloController(app);
userController(app);
tuitsController(app);
mongoose.connect(process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev');
app.listen(process.env.PORT || 4000);