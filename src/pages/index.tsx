import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Information from "@/components/Information";
import Content from "@/components/Content";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Information />
      <Content />
    </main>
  );
}
