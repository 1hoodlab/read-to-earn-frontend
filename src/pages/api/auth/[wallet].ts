// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AxiosInstance from "@/axiosInstance";

import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { query, method, body } = req;
  if (method === "POST") {
  }
  if (method === "GET") {
    try {
      const { wallet } = query;

      let { data } = await AxiosInstance.get("/auth/metmask/signin-message", {
        headers: {
          "x-wallet-address": wallet,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error as AxiosError;
        res.status(400).json(response?.data);
      } else {
        res.status(400).send("Bad Request!");
      }
    }
  }
}
