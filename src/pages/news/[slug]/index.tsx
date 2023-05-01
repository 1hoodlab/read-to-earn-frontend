import AxiosInstance from "@/axiosInstance";
import { formatDMMMMYYYY } from "@/utils";
import { Box, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  id: number;
  token_id: number;
  title: string;
  thumbnail: string;
  content_url: string;
  cid: string;
  total_supply: string;
  payment_token: number;
  min_read: number;
  author_id: number;
  created_at: string;
  slug: string;
  content: string;
}

export default function NewsDetail(props: Props) {
  return (
    <>
      <NextSeo title={props.title} />
      <div>
        <Heading
          textAlign={"center"}
          fontWeight={900}
          fontSize={"35px"}
          letterSpacing={"0.02em"}
          lineHeight={"50px"}
        >
          {props.title}
        </Heading>
        <Text
          textAlign={"center"}
          color={"white.300"}
          fontSize={"sm"}
          fontWeight={600}
          lineHeight={"15px"}
        >
          {formatDMMMMYYYY(props.created_at)}
        </Text>
        <Box>
          <ReactMarkdown
            children={props?.content}
            remarkPlugins={[[remarkGfm]]}
          />
        </Box>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const {
    query: { slug },
  } = ctx;
  const { data } = await AxiosInstance.get(`/news/${slug}`);
  let response = await fetch(data.content_url);
  const jsonData = await response.text();
  return {
    props: {
      ...data,
      content: jsonData,
    }, // will be passed to the page component as props
  };
}
