import "dotenv/config";
import express from "express";
import cors from "cors";
import colorRouter from "./router/colorRouter";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use("/api", colorRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
