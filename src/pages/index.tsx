import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Menu from "@/components/menu";
import FirstArticle from "@/components/firstArticle";
import ListArticle from "@/components/listArticle";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Menu />
      <FirstArticle />
      <ListArticle />
      <ListArticle />
    </main>
  );
}
