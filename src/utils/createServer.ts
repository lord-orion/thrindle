import "dotenv/config";
import express from "express";
import compression from "compression";
import { errorHandler, notFoundHandler } from "../middlewares/errors";
import authRoutes from "../routes/auth";
import transactionsRoutes from "../routes/transactions";
import userRoutes from "../routes/user";
import transactionRoutes from "../routes/transactions";
import passport from "passport";
import passportStrategy from "../middlewares/passport";

function createServer() {
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(compression());

  app.use(passport.initialize());
  passport.use(passportStrategy);

  app.get("/", (req: Request, res: any) => {
    res.json({
      msg: "Thrindle...",
    });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/transactions", transactionsRoutes);

  return app;
}

export default createServer;
