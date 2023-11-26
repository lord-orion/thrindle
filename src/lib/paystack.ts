import axios from "axios";
import config from "../config";

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

  async createTransferRecipient(): Promise<{
    UserId: string;
    access_token: string;
  }> {
    try {
      const response = await this.client.post("/login", {});
      let data = response.data;
      return data.Object;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new GigService();
