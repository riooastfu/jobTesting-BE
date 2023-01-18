import express from "express";
import cors from "cors";

import PegawaiRoute from "./routes/PegawaiRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(PegawaiRoute)

app.listen(5000, ()=> console.log("Server up and running..."));
