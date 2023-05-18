import styles from "@/styles/Home.module.scss";

import ListArticle from "@/components/listArticle";
import FirstArticle from "@/components/article";
import { Box, Divider, Text, Wrap, WrapItem } from "@chakra-ui/react";
import TextHighLight from "@/components/text-highlight";
import SecondArticle from "@/components/article/second-article";
import NewsItem from "@/components/article/item";
import { NewsTagCategory } from "@/components/news-tag";
import AxiosInstance from "@/axiosInstance";
interface Props {
  firstArticle: {
    shortDescription: string;
    shortContent: string;
    newsTagCategory: NewsTagCategory;
    title: string;
    banner: string;
    slug: string;
  };
  secondArticle: {
    slug: string;
    title: string;
    shortContent: string;
    newsTagCategory: NewsTagCategory;
    banner: string;
  };
}
export default function Home(props: Props) {
  return (
    <main className={styles.main}>
      <FirstArticle
        slug={props.firstArticle.slug}
        shortDescription={props.firstArticle.shortDescription}
        shortContent={props.firstArticle.shortContent}
        newsTagCategory={props.firstArticle.newsTagCategory}
        title={props.firstArticle.title}
        banner={props.firstArticle.banner}
      />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginTop={"80px"}
      >
        <Box>
          <TextHighLight
            fontSize={"20px"}
            lineHeight={"16px"}
            fontWeight={700}
            letterSpacing={"0.02em"}
            content="Full Story"
            hlwidth="100px"
          />
        </Box>
        <Box background={"#EDEDED;"} height={"1px"} width={"980px"} />
        <Box>
          <Text fontSize={"12px"} fontWeight={500}>
            See now
          </Text>
        </Box>
      </Box>
      <Box marginBottom={"125px"}>
        <SecondArticle
          slug={props.secondArticle.slug}
          title={props.secondArticle.title}
          banner={props.secondArticle.banner}
          content={props.secondArticle.shortContent}
          newsTagCategory={props.secondArticle.newsTagCategory}
        />
      </Box>
      <Box marginBottom={"66px"}></Box>
    </main>
  );
}

export async function getServerSideProps() {
  const PAGE_DEFAULT = 1;
  const PER_PAGE = 10;
  let {
    data: { data, pagination },
  } = await AxiosInstance.get("/news/managed-news", {
    params: {
      page: PAGE_DEFAULT,
      perPage: PER_PAGE,
    },
  });

  const transformData = (
    index: number
  ): {
    slug: string;
    shortDescription: string;
    shortContent: string;
    newsTagCategory: NewsTagCategory;
    title: string;
    banner: string;
  } | null => {
    if (pagination.total === 0) return null;
    if (index > pagination.total - 1) {
      return transformData(0);
    }
    return {
      slug: data[index].slug,
      shortDescription: data[index].short_description,
      shortContent: data[index].short_content,
      newsTagCategory:
        data[index].total_supply !== 0
          ? NewsTagCategory.earn
          : NewsTagCategory.free,
      title: data[index].title,
      banner: data[index].thumbnail,
    };
  };

  return {
    props: {
      firstArticle: transformData(0),
      secondArticle: transformData(1),
    }, // will be passed to the page component as props
  };
}
