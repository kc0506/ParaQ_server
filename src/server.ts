import express from "express";
import cors from "cors";
import { connect_db } from "./db";
import router from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

connect_db();


app.use('/', router);

const port = process.env.port as any || 7777;
app.listen(port, () => console.log("server created on port " + port));

