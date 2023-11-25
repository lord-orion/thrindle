import config from "../config";
import jwt from "jsonwebtoken";

export const successResponse = (message: string, data: any) => {
  return {
    status: "success",
    message,
    data,
  };
};

export async function generateJWTToken(
  payload: any,
  secret = config.jwt.secret
) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        ...payload,
      },
      secret,
      {},
      (err: any, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
}
