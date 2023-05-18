import { Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import NewsItem from "./item";
import { NewsTagCategory } from "../news-tag";

type Item = {
  author: string;
  from: string;
  banner: string;
  newsTagCategory: NewsTagCategory;
  title: string;
  slug: string;
};

type Props = {
  data: Item[];
};

export default function ListArticle(props: Props) {
  return (
    <Wrap spacing={"28px"} justify={"space-between"}>
      {props.data.map((value) => (
        <WrapItem key={value.slug}>
          <NewsItem
            slug={value.slug}
            author={value.author}
            from={value.from}
            banner={value.banner}
            newsTagCategory={value.newsTagCategory}
            title={value.title}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
}
