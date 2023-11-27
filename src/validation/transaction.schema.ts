import { object, string, number, array, TypeOf } from "zod";

const payload = {
  body: object({
    amount: string({
      required_error: "Amount is required, key:amount",
    }),
    description: string({
      required_error: "Description is required, key:description",
    }),
  }),
};

export const InitiateTransactionSchema = object({
  ...payload,
});

export type InitiateTransactionInput = TypeOf<typeof InitiateTransactionSchema>;
