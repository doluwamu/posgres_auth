import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./userRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env || 4343;

app.use("/users", userRoutes);

app.listen(PORT, console.log(`app listening on port ${PORT}`));
