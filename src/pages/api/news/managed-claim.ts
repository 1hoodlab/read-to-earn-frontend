// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AxiosInstance from "@/axiosInstance";
import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { headers, body, method } = req;
  if (method === "PUT") {
    try {
      const { data } = await AxiosInstance.put(
        "/news/managed-claim",
        {
          news_id: body.news_id,
        },
        {
          headers: {
            Authorization: `Bearer ${headers["authorization"]}`,
          },
        }
      );
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
