import { Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import NewsItem from "./item";

type Props = {
    
};

export default function ListArticle({}: Props) {
  return (
    <Wrap spacing={"28px"} justify={"space-between"}>
      <WrapItem>
        <NewsItem
          author="Gamma Team."
          from="Spirity.JSC"
          banner="/img/listArticle_img1.png"
          newsTagCategory={NewsTagCategory.earn}
          title="Dynamic avatars for legacy capture: a revolution of blockchain use in the making"
        />
      </WrapItem>
      <WrapItem>
        <NewsItem
          author="Gamma Team."
          from="Spirity.JSC"
          banner="/img/listArticle_img2.png"
          newsTagCategory={NewsTagCategory.free}
          title="Dynamic avatars for legacy capture: a revolution of blockchain use in the making"
        />
      </WrapItem>
      <WrapItem>
        <NewsItem
          author="Gamma Team."
          from="Spirity.JSC"
          banner="/img/listArticle_img3.png"
          newsTagCategory={NewsTagCategory.earn}
          title="Dynamic avatars for legacy capture: a revolution of blockchain use in the making"
        />
      </WrapItem>
    </Wrap>
  );
}
