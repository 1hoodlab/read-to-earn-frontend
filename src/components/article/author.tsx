import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  author: string;
  from: string;
};

export default function Author({ author, from }: Props) {
  return (
    <Box>
      <Text fontWeight={700} fontSize={"12px"} lineHeight={"15px"} marginBottom={"5px"}>
        By {author}
      </Text>
      <Text
        fontWeight={600}
        fontSize={"8px"}
        lineHeight={"10px"}
        color={"#A3A3A3"}
      >
        {from}
      </Text>
    </Box>
  );
}
