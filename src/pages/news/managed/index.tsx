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
import InputAnotherNewsData from "@/components/news/input-content";

export default function ManagedNews() {
  const { back } = useRouter();
  const [cid, setCid] = useState<string>("");
  const [bannerUrl, setBannerUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [totalSupply, setTotalSupply] = useState<string>("0");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [shortContent, setShortContent] = useState<string>("");

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
              shortDescription={shortDescription}
              shortContent={shortContent}
              totalSupply={totalSupply}
              cid={cid}
            />
          </Box>

          <EnableEarn data={totalSupply} setData={setTotalSupply} />

          <InputAnotherNewsData title="Short Description" data={shortDescription} setData={setShortDescription} height={"106px"}/>
          <InputAnotherNewsData title="Short Content" data={shortContent} setData={setShortContent} height={"184px"}/>
        </GridItem>
      </Grid>
    </Box>
  );
}
