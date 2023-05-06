import AxiosInstance from "@/axiosInstance";
import PublishNews from "@/components/publish-news";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import slug from "slug";
import FormData from "form-data";
import useUploadNews from "@/components/useUploadNews";
import { CheckIcon } from "@chakra-ui/icons";
import { IoImageOutline } from "react-icons/io5";
import { BackIcon } from "@/components/icon/Back";
import TextHighLight from "@/components/text-highlight";
import { useRouter } from "next/router";
type Props = {};

export default function ManagedNews({}: Props) {
  const { back } = useRouter();

  const {
    upload,
    isLoading,
    isSuccess,
    isError,
    data: cid,
    error,
  } = useUploadNews();
  const [title, setTitle] = useState<string>("");
  const [totalSupply, setTotalSupply] = useState<string>("0");
  const [markdownFile, setMarkdownFile] = useState<File | null | undefined>(
    undefined
  );
  const handleSetUploadFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const markdownFile = event.target.files?.item(0);
    setMarkdownFile(markdownFile);
  };

  return (
    <Box paddingTop={"30px"}>
      <Box
        display={"inline-flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"2"}
        marginBottom={"38px"}
        onClick={back}
        cursor={"pointer"}
      >
        <BackIcon fontSize={"30px"} />
        <TextHighLight
          content="Create News"
          hlWidth="119px"
          fontSize={"20px"}
          lineHeight={"24px"}
          fontWeight={"black"}
        />
      </Box>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={8}>
          <Box>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter new title"
              fontSize={"sm"}
            />
          </Box>

          <Box>
            <Text
              color={"#758091"}
              letterSpacing={"0.07em"}
              fontWeight={"medium"}
              fontSize={"15px"}
            >
              Upload Thumbnail
            </Text>
            <Box w={"full"} className="dashed">
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                padding={"50px"}
              >
                <IoImageOutline fontSize={"60px"} />
                <Text
                  marginTop={"17px"}
                  textAlign={"center"}
                  fontSize={"14px"}
                  fontWeight={"medium"}
                >
                  Drop your file(s) here or{" "}
                  <span style={{ color: "#1463FF" }}>browser</span>
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
        </GridItem>
        <GridItem colSpan={4}>
          <PublishNews
            title={title}
            slug={slug(title)}
            totalSupply={totalSupply}
            cid={cid}
          />
        </GridItem>
      </Grid>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          $
        </InputLeftElement>
        <Input
          placeholder="Enter amount"
          onChange={(e) => setTotalSupply(e.target.value)}
        />
      </InputGroup>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          onChange={(e) => handleSetUploadFile(e)}
          placeholder="Enter password"
          type="file"
          name="markdown_file"
        />
        {!isSuccess && (
          <InputRightElement width="4.5rem">
            <Button
              isLoading={isLoading}
              h="1.75rem"
              size="sm"
              onClick={() => upload(markdownFile)}
            >
              Upload
            </Button>
          </InputRightElement>
        )}
        {isSuccess && (
          <InputRightElement>
            <CheckIcon color="green.500" />
          </InputRightElement>
        )}
      </InputGroup>
      <Text>{cid}</Text>
    </Box>
  );
}
