import styles from "@/styles/Home.module.scss";

import ListArticle from "@/components/listArticle";
import FirstArticle from "@/components/article";
import { Box, Divider, Text, Wrap, WrapItem } from "@chakra-ui/react";
import TextHighLight from "@/components/text-highlight";
import SecondArticle from "@/components/article/second-article";
import NewsItem from "@/components/article/item";
import { NewsTagCategory } from "@/components/news-tag";
export default function Home() {
  return (
    <main className={styles.main}>
      <FirstArticle
        shortDescription="If you use the Ordinals protocol, which allows you to inscribe NFT
      data onto the Bitcoin"
        shortContent="Cyber-crime and money laundering were covered in a separate
      chapter. But it seems that all regulators' songs have this refrain
      that they keep using. Cyber-crime and money laundering were
      covered in a separate chapter. But it seems."
        newsTagCategory={NewsTagCategory.earn}
        title="Ukraine war: Five ways Russia’s invasion may play out"
        banner="img/article1.png"
      />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginTop={"80px"}
      >
        <Box>
          <TextHighLight
            fontSize={"20px"}
            lineHeight={"16px"}
            fontWeight={700}
            letterSpacing={"0.02em"}
            content="Full Story"
            hlwidth="100px"
          />
        </Box>
        <Box background={"#EDEDED;"} height={"1px"} width={"980px"} />
        <Box>
          <Text fontSize={"12px"} fontWeight={500}>
            See now
          </Text>
        </Box>
      </Box>
      <Box marginBottom={"125px"}>
        <SecondArticle />
      </Box>
      <Box marginBottom={"66px"}>
      
      </Box>
    </main>
  );
}
