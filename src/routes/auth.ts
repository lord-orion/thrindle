import express from "express";
import {
  getLoggedInUserHandler,
  loginHandler,
} from "../controllers/authController";

import validateResource from "../middlewares/validateResource";
import { LoginSchema } from "../validation/auth.schema";

const router = express.Router();

// Log in user
router.post("/", validateResource(LoginSchema), loginHandler);

// Get logged in user
router.get("/me", getLoggedInUserHandler);

export default router;
