import styles from "@/styles/Home.module.scss";

import ListArticle from "@/components/listArticle";
import FirstArticle from "@/components/firstArticle";
export default function Home() {
  return (
    <main className={styles.main}>
      <FirstArticle />
      <ListArticle />
      <ListArticle />
    </main>
  );
}
