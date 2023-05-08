import { Box, Grid, GridItem, Image, Text, chakra } from "@chakra-ui/react";
import React from "react";
import Author from "./author";
import NewsTag, { NewsTagCategory } from "../news-tag";

type Props = {};

export default function SecondArticle({}: Props) {
  return (
    <Box marginY={"50px"}>
      <Grid templateColumns="repeat(12, 1fr)" gap={20}>
        <GridItem colSpan={5}>
          <Author author="Gamma Team." from="Spirity.JSC"/>
          <Text
            marginTop={"4px"}
            marginBottom={"8px"}
            fontWeight={900}
            fontSize={"30px"}
            letterSpacing={"0.06em"}
            lineHeight={"37px"}
            className="montserrat"
          >
            Ukraine war: Five ways Russia’s invasion may play out
          </Text>
          <NewsTag type={NewsTagCategory.free} marginBottom={"10px"} />
          <Text
            color={"#909090"}
            letterSpacing={"0.02em"}
            fontSize={"12px"}
            lineHeight={"19px"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen{" "}
            <chakra.span fontWeight={700} color="black" cursor={"pointer"}>
              Read More...
            </chakra.span>
          </Text>
        </GridItem>
        <GridItem colSpan={7}><Image src="img/article2.png" w={"full"}/></GridItem>
      </Grid>
    </Box>
  );
}
