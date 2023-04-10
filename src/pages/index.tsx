import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Menu from "@/components/menu";
import FstArticle from "@/components/fstArticle";
import ListArticle from "@/components/listArticle";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Menu />
      <FstArticle />
      <ListArticle />
      <ListArticle />
    </main>
  );
}
