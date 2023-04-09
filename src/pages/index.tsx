import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import FstA from "@/components/fstA";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <FstA />
    </main>
  );
}
