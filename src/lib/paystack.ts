import axios from "axios";
import config from "../config";
import {
  CreateTransferRecipientPayload,
  CreateTransferRecipientResponse,
} from "../types/paystack";

class PaystackService {
  client: any;

  constructor() {
    this.client = axios.create({
      baseURL: config.paystack.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  setToken(token: string) {
    this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  async initiateTransferRecipient(
    payload: CreateTransferRecipientPayload
  ): Promise<CreateTransferRecipientResponse> {
    try {
      const response = await this.client.post("/transfer", {});
      let { data } = response.data;
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async createTransferRecipient(
    payload: CreateTransferRecipientPayload
  ): Promise<CreateTransferRecipientResponse> {
    try {
      const response = await this.client.post("/transferrecipient", {});
      let { data } = response.data;
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new PaystackService();
