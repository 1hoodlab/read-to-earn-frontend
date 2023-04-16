import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import FirstArticle from "@/components/FirstArticle";
import ListArticle from "@/components/ListArticle";
import { NextSeo } from "next-seo";
import { api_url } from "@/constant/network";
import Axios from 'axios'
import { useEffect } from "react";
export default function Home() {
  const getData = async() => {
    let data = await  Axios({
      url: '/api/hello',
      method: 'GET'
    })
    console.log(data);
  }
  useEffect(() => {
    getData();
  },[])
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
