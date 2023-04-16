import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import { NextSeo } from "next-seo";
import { api_url } from "@/constant/network";

export default function Home() {
  console.log(process.env.BASE_URL);
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}

export async function getServerSideProps() {
  console.log(api_url);
  return {
    props: { id: 123 },
  };
}
