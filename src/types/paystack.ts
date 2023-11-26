// {

//   "type": "nuban",

//   "name": "Tolu Robert",

//   "account_number": "01000000010",

//   "bank_code": "058",

//   "currency": "NGN"

// }

export interface CreateTransferRecipientPayload {
  type: string;
  name: string;
  account_number: string;
  bank_code: string;
  currency: string;
}

export interface CreateTransferRecipientResponse {
  active: boolean;
  createdAt: string;
  currency: string;
  domain: string;
  id: number;
  integration: number;
  name: string;
  recipient_code: string;
  type: string;
  updatedAt: string;
  is_deleted: boolean;
  details: {
    authorization_code: string | null;
    account_number: string;
    account_name: string;
    bank_code: string;
    bank_name: string;
  };
}

export interface TransferRecipient {
  domain: string;
  type: string;
  currency: string;
  name: string;
  details: {
    account_number: string;
    account_name: string | null;
    bank_code: string;
    bank_name: string;
  };
  metadata: Record<string, any>; // Generic metadata field
  recipient_code: string;
  active: boolean;
  id: number;
  integration?: number; // Optional property
  createdAt: string;
  updatedAt: string;
}
