import { Tag } from "@chakra-ui/react";
import React from "react";

export const enum NewsTagCategory {
  earn,
  free,
}
const NewsTagType: {
  [key in NewsTagCategory]: {
    name: string;
    backgroundColor: string;
    color: string;
  };
} = {
  [NewsTagCategory.earn]: {
    name: "#earn",
    backgroundColor: "#FFF500",
    color: "#000000",
  },
  [NewsTagCategory.free]: {
    name: "#free",
    backgroundColor: "#00FF75",
    color: "#000000",
  },
};
type Props = {
  type: NewsTagCategory;
};

export default function NewsTag({ type }: Props) {
  return (
    <Tag
    fontSize={"8px"}
    letterSpacing={"0.02em"}
    fontWeight={700}
    className="montserrat"
    textTransform={"uppercase"}
    paddingX={"20px"}
    borderRadius={"1px"}
    
      color={NewsTagType[type].color}
      background={NewsTagType[type].backgroundColor}
    >
      {NewsTagType[type].name}
    </Tag>
  );
}
