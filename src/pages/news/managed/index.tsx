import PublishNews from "@/components/publish-news";
import { Box, Grid, GridItem, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import slug from "slug";
import { BackIcon } from "@/components/icon/Back";
import TextHighLight from "@/components/text-highlight";
import { useRouter } from "next/router";
import UploadComponent from "@/components/upload";
import { UploadType } from "@/constant";
import EnableEarn from "@/components/enable-earn";

export default function ManagedNews() {
  const { back } = useRouter();
  const [cid, setCid] = useState<string>("");
  const [bannerUrl, setBannerUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [totalSupply, setTotalSupply] = useState<string>("0");

  
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
          hlwidth="119px"
          fontSize={"20px"}
          lineHeight={"24px"}
          fontWeight={"black"}
        />
      </Box>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={8}>
          <Box marginBottom={"20px"}>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter new title"
              fontSize={"sm"}
            />
          </Box>

          <UploadComponent type={UploadType.banner} setData={setBannerUrl} />
          <UploadComponent type={UploadType.content} setData={setCid} />
        </GridItem>
        <GridItem colSpan={4}>
          <Box marginBottom={"20px"}>
            <PublishNews
              bannerUrl={bannerUrl}
              title={title}
              slug={slug(title)}
              totalSupply={totalSupply}
              cid={cid}
            />
          </Box>

          <EnableEarn data={totalSupply} setData={setTotalSupply} />
        </GridItem>
      </Grid>

      {/* <InputGroup size="md">
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
      <Text>{cid}</Text> */}
    </Box>
  );
}
