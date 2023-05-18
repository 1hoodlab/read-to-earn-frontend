import React from "react";
import { Box, Text, Image, Grid, GridItem, chakra } from "@chakra-ui/react";
import NewsTag, { NewsTagCategory } from "../news-tag";
import TextHighLight from "../text-highlight";
import { words } from "lodash";
import { useRouter } from "next/router";
interface Props {
  slug: string;
  banner: string;
  title: string;
  newsTagCategory: NewsTagCategory;
  shortDescription: string;
  shortContent: string;
  detailUrl?: string;
}

function RenderTitle(title: string) {
  try {
    const firstLetterRegex = /\w+$/gi;
    const firstLetter = words(title, firstLetterRegex)?.[0];
    const anotherLetter = title.substring(0, title.length - firstLetter.length);
    return (
      <div>
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
      </div>
    );
  } catch (error) {
    return (
      <div>
        <Text
          className="montserrat"
          fontWeight={900}
          fontSize={"34px"}
          lineHeight={"40px"}
        >
          {" "}
          <TextHighLight content={title} hlwidth="120px" />
        </Text>
      </div>
    );
  }
}
function FirstArticle(props: Props) {
  const { push } = useRouter();

  return (
    <div>
      <Box marginTop={"50px"}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={5}>
            <Image src={props.banner} className="clip-path-polygon" height={"full"} objectFit={"cover"}/>
          </GridItem>
          <GridItem colSpan={7}>
            <Box
              cursor={"pointer"}
              onClick={() => push(`/news/${props.slug}`)}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-end"}
              height={"full"}
            >
              {RenderTitle(props.title)}

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
                noOfLines={2}
                fontSize={"13px"}
                lineHeight={"19px"}
                letterSpacing={"0.02em"}
                width={"560px"}
                color={"#919191"}
                fontWeight={500}
              >
                {props.shortContent}
              </Text>
              <chakra.span
                fontSize={"13px"}
                lineHeight={"19px"}
                fontWeight={700}
                letterSpacing={"0.02em"}
                color={"black"}
                cursor={"pointer"}
              >
                Read more
              </chakra.span>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}

export default FirstArticle;
