import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
};

export default function ButtonRte({ title }: Props) {
  return (
    <Button
      borderRadius={"1px"}
      variant={"black"}
      color={"white"}
      fontSize={"12px"}
      fontWeight={800}
      minW={"104px"}
    >
      {title}
    </Button>
  );
}
