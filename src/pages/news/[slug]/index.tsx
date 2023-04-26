import { NextSeo } from "next-seo";
import React from "react";


interface Props {
  slug: string;
}

export default function NewsDetail() {
  return (
    <>
      <NextSeo title={"slug"} />
      <div>index</div>
    </>
  );
}