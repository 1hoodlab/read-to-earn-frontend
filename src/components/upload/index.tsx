import { UploadType, UploadTypeDetail } from "@/constant";
import { Box, Icon, Input, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { chakra } from "@chakra-ui/react";
import useUploadNews from "../useUploadNews";

interface Props {
  type: UploadType;
}
export default function Upload({ type }: Props) {
  const { upload, isLoading, isSuccess, isError, data, error } =
    useUploadNews(type);

  const [content, setContent] = useState<string | undefined>(undefined);

  const handleSetContent = (file: File | null | undefined) => {
    upload(file);
  };
  console.log(data);

  return (
    <Box>
      <Text
        color={"#758091"}
        letterSpacing={"0.07em"}
        fontWeight={"medium"}
        padding={"10px"}
        fontSize={"13px"}
      >
        {UploadTypeDetail[type].title}
      </Text>
      <Box w={"full"} className="dashed">
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          padding={"50px"}
        >
          <Box height={"30px"}>
            {isLoading && <Spinner size="xs" />}
            {!isLoading && (
              <Icon as={UploadTypeDetail[type].icon} fontSize={"30px"} />
            )}
          </Box>
          <Input
            type="file"
            hidden
            id={`upload-${type}`}
            onChange={(e) => handleSetContent(e.target.files?.item(0))}
          />
          <Text
            marginTop={"17px"}
            textAlign={"center"}
            fontSize={"14px"}
            fontWeight={"medium"}
          >
            Drop your file(s) here or{" "}
            <chakra.label
              htmlFor={`upload-${type}`}
              style={{ color: "#1463FF" }}
              cursor={"pointer"}
            >
              browser
            </chakra.label>
          </Text>
          <Text
            textAlign={"center"}
            fontSize={"12px"}
            fontWeight={400}
            color={"#B8BDC9"}
          >
            Max. file size 5MB
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
