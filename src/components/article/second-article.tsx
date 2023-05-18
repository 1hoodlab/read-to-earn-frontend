import { Box, Grid, GridItem, Image, Text, chakra } from "@chakra-ui/react";
import React from "react";
import Author from "./author";
import NewsTag, { NewsTagCategory } from "../news-tag";
import { useRouter } from "next/router";

type Props = {
  slug: string;
  title: string;
  content: string;
  banner: string;
  newsTagCategory: NewsTagCategory;
};

export default function SecondArticle({
  title,
  content,
  banner,
  newsTagCategory,
  slug,
}: Props) {
  const { push } = useRouter();
  return (
    <Box marginY={"50px"}>
      <Grid templateColumns="repeat(12, 1fr)" gap={20}>
        <GridItem colSpan={5}>
          <Author author="Gamma Team." from="Spirity.JSC" />
          <Text
            cursor={"pointer"}
            onClick={() => push(`/news/${slug}`)}
            marginTop={"4px"}
            marginBottom={"8px"}
            fontWeight={900}
            fontSize={"30px"}
            letterSpacing={"0.06em"}
            lineHeight={"37px"}
            className="montserrat"
          >
            {title}
          </Text>
          <NewsTag type={newsTagCategory} marginBottom={"10px"} />
          <Text
            color={"#909090"}
            letterSpacing={"0.02em"}
            fontSize={"12px"}
            lineHeight={"19px"}
          >
            {content}
            <chakra.span
              fontWeight={700}
              color="black"
              cursor={"pointer"}
              onClick={() => push(`/news/${slug}`)}
            >
              Read More
            </chakra.span>
          </Text>
        </GridItem>
        <GridItem colSpan={7}>
          <Image src={banner} w={"full"} maxHeight={"265px"} objectFit={"cover"}/>
        </GridItem>
      </Grid>
    </Box>
  );
}
