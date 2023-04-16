import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import { NextSeo } from "next-seo";
import Content from "@/components/Content";
import Menu_right from "@/components/Menu_right";
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Box display={"flex"}>
        <Content />
        <Menu_right />
      </Box>

    </main>
  );
}
