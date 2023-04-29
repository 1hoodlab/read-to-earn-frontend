export const RouterHiddenMenu = ["/profile/[userid]"];

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
