import express from "express";
import { confirmTransaction } from "../controllers/webhook/transactions";

const router = express.Router();

router.post("/confirmTransaction", confirmTransaction);

export default router;
