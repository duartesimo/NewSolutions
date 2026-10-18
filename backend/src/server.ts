import cors from "cors";
import express from "express";

import projectsRouter from "./routes/projects.routes.js";
import contactRouter from "./routes/contact.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "API is running",
  });
});

app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
