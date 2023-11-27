import { NextFunction, Request, Response } from "express";
import { InitiateTransactionInput } from "../validation/transaction.schema";
import { NotFoundError } from "../errors";
import UserModel from "../models/User";
import paystackService from "../lib/paystack";
import { successResponse } from "../utils";
import TransactionModel from "../models/Transactions";

export const initiateTransaction = async (
  req: Request<{}, {}, InitiateTransactionInput["body"]>,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user;

  const user = await UserModel.findById(userId);
  const { amount } = req.body;

  if (!user) {
    throw new NotFoundError("User not found");
  }

  const response = paystackService.initiateTransaction({
    amount,
    email: user.email,
  });

  const transaction = new TransactionModel({
    amount,
  });
  return res.send(
    successResponse("Transaction initiated successfully", response)
  );
};

export const verifyTranaction = () => {};

export const getTransactionHistory = () => {};
