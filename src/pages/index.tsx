import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import FirstArticle from "@/components/FirstArticle";
import ListArticle from "@/components/ListArticle";
import { NextSeo } from "next-seo";
import { api_url } from "@/constant/network";

export default function Home() {
  console.log(process.env.BASE_URL);
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

export async function getServerSideProps() {
  console.log(api_url);
  return {
    props: { id: 123 },
  };
}
