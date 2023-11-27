import axios from "axios";
import config from "../config";
import {
  initiateTransactionPayload,
  initiateTransactionResponse,
} from "../types/paystack";

class PaystackService {
  client: any;

  constructor() {
    this.client = axios.create({
      baseURL: config.paystack.baseUrl,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${config.paystack.secretKey}`,
      },
    });
  }

  setToken(token: string) {
    this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  async initiateTransaction(
    payload: initiateTransactionPayload
  ): Promise<initiateTransactionResponse> {
    try {
      const response = await this.client.post("/transaction/initialize", {});
      let data = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new PaystackService();
