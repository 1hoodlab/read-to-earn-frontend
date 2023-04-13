import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import FirstArticle from "@/components/FirstArticle";
import ListArticle from "@/components/ListArticle";
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
