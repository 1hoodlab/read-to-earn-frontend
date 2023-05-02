import AxiosInstance from "@/axiosInstance";
import PublishNews from "@/components/publish-news";
import {
  Button,
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
type Props = {};

export default function ManagedNews({}: Props) {
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
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
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
      <PublishNews
        title={title}
        slug={slug(title)}
        totalSupply={totalSupply}
        cid={cid}
      />
    </div>
  );
}
