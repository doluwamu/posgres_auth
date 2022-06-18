import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import teamMemberRoutes from "./routes/teamMemberRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env || 4444;

app.use("/users", userRoutes);
app.use("/members", teamMemberRoutes);

app.listen(PORT, console.log(`app listening on port ${PORT}`));
