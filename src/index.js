import express from "express";

import { labelsRoutes, notesRoutes, usersRoutes } from "./routes";
import { PORT } from "./config";
import DB from "./db";
import { errorHandler } from "./middlewares";

const app = express();

DB.connect();

app.use(express.json());

app.use("/api", usersRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/labels", labelsRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
