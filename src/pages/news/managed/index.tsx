import PublishNews from "@/components/publish-news";
import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function ManagedNews({}: Props) {
  return (
    <div>
      <PublishNews slug="news-one-12345123123123" totalSupply="10" />
    </div>
  );
}
