import styles from "@/styles/Home.module.scss";

import ListArticle from "@/components/listArticle";
import FirstArticle from "@/components/firstArticle";
import { Box, Divider ,Text} from "@chakra-ui/react";
import TextHighLight from "@/components/text-highlight";
export default function Home() {
  return (
    <main className={styles.main}>
      <FirstArticle />
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} marginTop={"80px"}>
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
          <Text fontSize={"12px"} fontWeight={500}>See now</Text>
        </Box>
      </Box>
    </main>
  );
}
