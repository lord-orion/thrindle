import express from "express";
import { loginHandler } from "../controllers/authController";

import validateResource from "../middlewares/validateResource";
import { LoginSchema } from "../validation/auth.schema";
import { SignUpSchema } from "../validation/user.schema";
import {
  getLoggedInUserHandler,
  signupHandler,
} from "../controllers/userController";
import ensureAuthenticated from "../middlewares/auth";

const router = express.Router();

// Log in user
router.post("/signup", validateResource(SignUpSchema), signupHandler);

// Get logged in user
router.get("/me", ensureAuthenticated, getLoggedInUserHandler);

export default router;
