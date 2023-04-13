import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Menu from "@/components/Menu";
import Content from "@/components/Content";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Menu />
      <Content />
    </main>
  );
}
