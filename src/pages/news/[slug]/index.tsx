import { NextSeo } from "next-seo";
import React from "react";

import { useRouter } from "next/router";

interface Props {
  slug: string;
}

export default function NewsDetail({ slug }: Props) {
  console.log(slug)
  return (
    <>
      <NextSeo title={slug} />
      <div>index</div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "" } }],
    fallback: true  , // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  return {
    props: {
      slug: "123",
    },
  };
}
