import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import FstArticle from "@/components/fstArticle";
import Menu from "@/components/menu";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Menu />
      <FstArticle />
    </main>
  );
}
