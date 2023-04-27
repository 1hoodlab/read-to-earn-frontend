import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  isLoading: boolean;
  onClick: any;
};

export default function ButtonRte({ title, isLoading , onClick}: Props) {
  return (
    <Button
      borderRadius={"1px"}
      variant={"black"}
      color={"white"}
      fontSize={"12px"}
      fontWeight={800}
      isLoading={isLoading}
      minW={"104px"}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
