import {
  Card,
  CardBody,
  Box,
  Text,
  Image,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Author from "./author";
import NewsTag, { NewsTagCategory } from "../news-tag";
import { useRouter } from "next/router";

type NewsItemsType = {
  banner: string;
  author: string;
  from: string;
  slug: string;
  title: string;
  newsTagCategory: NewsTagCategory;
};

export default function NewsItem({
  banner,
  author,
  from,
  slug,
  title,
  newsTagCategory,
}: NewsItemsType) {
  const { push } = useRouter();
  return (
    <Card w="353px" variant={"unstyled"} cursor={"pointer"}  onClick={() => push(`/news/${slug}`)} _hover={{
      color: "blue.100",
      transition: "all .1s ease-in-out",
    }}>
      <CardBody marginBottom={"9px"}>
        <Image
        height={"165px"}
        objectFit={"cover"}
          w={"full"}
          marginBottom={"10px"}
          src={banner}
          alt="Green double couch with wooden legs"
        />
        <Author author={author} from={from} />
      </CardBody>
      <CardFooter>
        <Box>
          <Text
            fontSize={"12px"}
            fontWeight={700}
            letterSpacing={"0.02em"}
            marginBottom={"13px"}
          >
            {title}
          </Text>
          <NewsTag type={newsTagCategory} />
        </Box>
      </CardFooter>
    </Card>
  );
}
