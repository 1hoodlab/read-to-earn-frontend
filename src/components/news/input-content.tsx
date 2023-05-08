import { Box, Text, Textarea, TextareaProps } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputAnotherNewsData({
  title,
  ...props
}: Props & TextareaProps) {
  return (
    <Box>
      <Text
        color={"#758091"}
        letterSpacing={"0.07em"}
        fontWeight={"medium"}
        padding={"10px"}
        fontSize={"13px"}
      >
        {title}
      </Text>
      <Box w={"full"}>
        <Textarea
          {...props}
          fontWeight={"medium"}
          fontSize={"13px"}
          resize={"none"}
        />
      </Box>
    </Box>
  );
}
