import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { IoMdPaper } from "react-icons/io";
type Props = {};

export default function CreateNews({}: Props) {
  const { push } = useRouter();
  return (
    <Grid
      padding={"26px 40px 26px 40px"}
      marginBottom={"10px"}
      templateColumns="repeat(3, 1fr)"
      w={"full"}
      background={"white"}
      boxShadow={"1px 4px 7px rgba(0, 0, 0, 0.25)"}
      borderRadius={"3px"}
    >
      <GridItem colSpan={2}>
        <Text
          fontWeight={"600"}
          fontSize={"16px"}
          lineHeight={"24px"}
          marginBottom={"8px"}
        >
          Create News
        </Text>
        <Text
          color={"#909090"}
          maxW={"90%"}
          fontSize={"12px"}
          letterSpacing={"0.04em"}
          lineHeight={"16px"}
        >
          Thinking of starting a news website? Even if you’re not planning to be
          the next New York Times, there’s plenty of space for creating your own
          news site for your favorite topic, local area, or anything else.
        </Text>
      </GridItem>

      <GridItem
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          leftIcon={<IoMdPaper />}
          variant={"black"}
          fontSize={"14px"}
          width={"full"}
          size={"lg"}
          onClick={() => push("/news/managed")}
        >
          Create
        </Button>
      </GridItem>
    </Grid>
  );
}
