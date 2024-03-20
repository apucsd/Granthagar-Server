import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./app/modules/user/user.route";
import notFound from "./app/middleware/notFound";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", userRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hi Granthagar Server Working !");
});
//Not Found
app.use(notFound);
export default app;
