import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Infomation from "@/components/Infomation";
import Content from "@/components/Content";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Infomation />
      <Content />
    </main>
  );
}
