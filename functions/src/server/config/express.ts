import * as cors from "cors";
import * as express from "express";
import { router } from "../routers/api";
import { checkAuth } from "../middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use(checkAuth);
app.use("/", router);

export { app };
