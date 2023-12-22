import express, { NextFunction, Request, Response } from "express";
import registerRano from "./routers/ranoRouter";

import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
// Middleware Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});
app.use(cors());
app.use("/users", registerRano);

app.post("/", (req, res) => {
  res.send("Api");
});

app.listen(PORT, () => {
  console.log("App run on port 3000");
});
