import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./app/modules/users/user.route";
import notFound from "./app/middleware/notFound";
import { bookRouter } from "./app/modules/books/book.route";
import { authRoutes } from "./app/modules/auth/auth.route";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", userRouter);
app.use("/api/v1", bookRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hi Granthagar Server Working !");
});

// GLOBAL ERROR
app.use(globalErrorHandler);
//Not Found
app.use(notFound);
export default app;
