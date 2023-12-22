import express from "express";
import registerRano from "./routers/ranoRouter";
import loginRano from "./routers/ranoRouterLogin";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", registerRano);
app.use("/login", loginRano);
app.post("/", (req, res) => {
  res.send("Api");
});

app.listen(3000, () => {
  console.log("App run in port 3000");
});
