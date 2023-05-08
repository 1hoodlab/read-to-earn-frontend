import React from "react";
import {
  Box,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  chakra,
} from "@chakra-ui/react";
import NewsTag, { NewsTagCategory } from "../news-tag";
import TextHighLight from "../text-highlight";
import withNoSSR from "../NoSSR";
import { words } from "lodash";
interface Props {
  banner: string;
  title: string;
  newsTagCategory: NewsTagCategory;
  shortDescription: string;
  shortContent: string;
  detailUrl?: string;
}

function RenderTitle(title: string) {
  const firstLetterRegex = /\w+$/gi;
  const firstLetter = words(title, firstLetterRegex)?.[0];
  const anotherLetter = title.substring(0, title.length - firstLetter.length);
  return (
    <Text
      className="montserrat"
      fontWeight={900}
      fontSize={"34px"}
      lineHeight={"40px"}
    >
      {" "}
      {anotherLetter}
      <TextHighLight content={firstLetter} hlwidth="120px" />
    </Text>
  );
}
function FirstArticle(props: Props) {
  return (
    <Box marginTop={"50px"}>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={5}>
          <Image src={props.banner} className="clip-path-polygon" />
        </GridItem>
        <GridItem colSpan={7}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            height={"full"}
          >
            {props.title && RenderTitle(props.title)}

            <Box marginY={"10px"}>
              <NewsTag type={props.newsTagCategory} />
            </Box>
            <Text
              width={"560px"}
              letterSpacing={"0.02em"}
              fontWeight={700}
              fontSize={"13px"}
              lineHeight={"19px"}
              marginBottom={"4px"}
            >
              {props.shortDescription}
            </Text>
            <Text
              fontSize={"13px"}
              lineHeight={"19px"}
              letterSpacing={"0.02em"}
              width={"560px"}
              color={"#919191"}
              fontWeight={500}
            >
              {props.shortContent}
              <chakra.span
                fontWeight={700}
                letterSpacing={"0.02em"}
                color={"black"}
                cursor={"pointer"}
              >
                Read more...
              </chakra.span>
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default FirstArticle;
