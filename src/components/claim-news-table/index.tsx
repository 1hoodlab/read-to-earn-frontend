import AxiosInstance from "@/axiosInstance";
import { Toast } from "@/constant";
import { SNEWS_CONTRACT_ADDRESS } from "@/constant/network";
import { prepareWriteSnews, usePrepareSnewsClaimToken } from "@/generated";
import withToast from "@/hoc/withToast";
import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import React, { useState } from "react";
import WrapperClaimNews from "./claim-news";

type News = {
  id: number;
  token_id: number;
  title: string;
  slug: string;
  thumbnail: string;
  content_url: string;
  cid: string;
  total_supply: string;
  payment_token: number;
  author_id: string;
  published: true;
  created_at: string;
};
type UserClaimNews = {
  news: News;
  status: string;
  token_earned: string;
  transaction_id: string;
  created_at: string;
};
type Props = {
  data: UserClaimNews[];
};

export default function ClaimNewsTable({ data = [] }: Props) {
  return (
    <TableContainer>
      <Table variant={`${data.length !== 0 && "striped"}`}>
        <Thead>
          <Tr>
            <Th>News ID</Th>
            <Th>Token ID</Th>
            <Th>Title</Th>
            <Th>Total Supply</Th>
            <Th>Payment</Th>
            <Th>Status</Th>
            <Th>Token Earned</Th>
            <Th>Transaction ID</Th>
            <Th>Verify At</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length === 0 && (
            <Tr>
              <Td>No data available</Td>
            </Tr>
          )}
          {data.length > 0 &&
            data.map((userClaimNews, index) => {
              return (
                <Tr key={userClaimNews.news.token_id}>
                  <Td>{userClaimNews.news.id}</Td>
                  <Td>{userClaimNews.news.token_id}</Td>
                  <Td isNumeric>{userClaimNews.news.title}</Td>
                  <Td isNumeric>
                    {ethers.utils.formatEther(userClaimNews.news.total_supply)}
                  </Td>
                  <Td>
                    {userClaimNews.news.payment_token === 1
                      ? "USDT"
                      : "Unknown"}
                  </Td>
                  <Td>{userClaimNews.status}</Td>
                  <Td>
                    {ethers.utils.formatEther(userClaimNews.token_earned)}
                  </Td>
                  <Td>{userClaimNews.transaction_id}</Td>
                  <Td>{userClaimNews.created_at}</Td>
                  <Td>
                    {parseFloat(
                      ethers.utils.formatEther(userClaimNews.token_earned)
                    ) === 0 && (
                      <WrapperClaimNews
                        news_id={userClaimNews.news.id}
                        key={index}
                        slug={userClaimNews.news.slug}
                        transaction_id={userClaimNews.transaction_id}
                      />
                    )}
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
