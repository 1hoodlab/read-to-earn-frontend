import { BigNumber } from "ethers";

export const RouterHiddenMenu = ["/profile/[userid]", "/news/managed"];

export type DataStorageType = {
  id: number;
  refresh_token: string;
  access_token: string;
  refresh_token_times: string;
  user_id: string;
};

export type UserInformationType = {
  id: string;
  username: string;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  verify_email_token: string;
  reset_password_token: string;
  wallet_address: string;
  auth_email_google: string;
  auth_metamask_wallet: string;
  role: string;
  stars: number;
  created_at: string;
  updated_at: string;
  nonce_for_earn: number;
  nonce_auth_metamask: string;
};

export type Toast = {
  success?(title?: string, description?: string): any;
  error?(title?: string, description?: string): any;
};

export type SnewsSignature = {
  deadline: number;
  v: number;
  r: `0x${string}`;
  s: `0x${string}`;
};
export const PAYMENT_TOKEN_ID = 1; // USDT

export enum Role {
  WRITER = "writer",
  ROOT = "root",
  READER = "reader",
}
