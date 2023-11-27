import { NextFunction, Request, Response } from "express";
import crypto from "crypto";
import config from "../../config";
import TransactionModel from "../../models/Transactions";
import { PaystackWebHookResponse } from "../../types/paystack";

export const confirmTransaction = (
  req: Request<{}, {}, PaystackWebHookResponse>,
  res: Response,
  next: NextFunction
) => {
  const eventData = req.body;
  console.log(eventData);
  const signature = req.headers["x-paystack-signature"] as string;

  if (!verify(eventData, signature)) {
    return res.sendStatus(400);
  }
  if (eventData.event === "charge.success") {
    const { id, amount } = eventData.data;
    // const newTransaction = new TransactionModel({
    //   thirdPartyTransactionId: id,
    //   amount,
    // });
    console.log(eventData);
  }
  res.send(200);
};

const verify = (eventData: any, signature: string): boolean => {
  const hash = crypto
    .createHmac("sha512", config.paystack.secretKey)
    .update(JSON.stringify(eventData))
    .digest("hex");

  return hash === signature;
};
