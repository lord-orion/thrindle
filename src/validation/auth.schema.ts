import { object, string, number, array, TypeOf } from "zod";

const payload = {
  body: object({
    email: string({
      required_error: "Email is required",
    }),
    firstName: string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    }),
    lastName: string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    }),
    password: string({
      required_error: "Password is required",
    }),
  }),
};

export const LoginSchema = object({
  ...payload,
});

export type CreateLoginInput = TypeOf<typeof LoginSchema>;
