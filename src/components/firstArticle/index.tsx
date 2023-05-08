import React from "react";
import styles from "@/styles/Home.module.scss";
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
interface Props {
  banner: string;
  title: string;
  newsType: NewsTagCategory;
  shortDescription: string;
  shortContent: string;
}
export default function FirstArticle() {
  return (
    <Box marginTop={"50px"}>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={5}>
          <Image src="/img/article1.png" className="clip-path-polygon"/>
        </GridItem>
        <GridItem colSpan={7}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            height={"full"}
          >
            <Text
              className="montserrat"
              fontWeight={900}
              fontSize={"34px"}
              lineHeight={"40px"}
              maxW={"604px"}
            >
              <TextHighLight content="Wallet" hlwidth="120px" /> Xverse added
              support for NFTs on the Bitcoin network
            </Text>
            <Box marginY={"10px"}>
              <NewsTag type={NewsTagCategory.earn} />
            </Box>
            <Text
              width={"560px"}
              letterSpacing={"0.02em"}
              fontWeight={700}
              fontSize={"13px"}
              lineHeight={"19px"}
              marginBottom={"4px"}
            >
              If you use the Ordinals protocol, which allows you to inscribe NFT
              data onto the Bitcoin{" "}
            </Text>
            <Text
              fontSize={"13px"}
              lineHeight={"19px"}
              letterSpacing={"0.02em"}
              width={"560px"}
              color={"#919191"}
              fontWeight={500}
            >
              Cyber-crime and money laundering were covered in a separate
              chapter. But it seems that all regulators' songs have this refrain
              that they keep using. Cyber-crime and money laundering were
              covered in a separate chapter. But it seems.{" "}
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
