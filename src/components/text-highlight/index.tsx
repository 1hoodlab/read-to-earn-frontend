import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

export default function TextHighLight(
  props: TextProps & { hlWidth: string; content: string }
) {
  return (
    <Text
      {...props}
      position={"relative"}
      _before={{
        content: '""',
        position: "absolute",
        left: "64%",
        bottom: "-3px",
        width: props.hlWidth,
        height: "15px",
        transform: "translateX(-60%)",
        background: "rgba(240, 232, 33, 0.71)",
        zIndex: -1,
      }}
    >
      {props.content}
    </Text>
  );
}
