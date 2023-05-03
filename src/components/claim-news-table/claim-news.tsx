import AxiosInstance from "@/axiosInstance";
import { SnewsSignature, Toast } from "@/constant";
import { SNEWS_CONTRACT_ADDRESS } from "@/constant/network";
import { prepareWriteSnews, writeSnews } from "@/generated";
import withToast from "@/hoc/withToast";
import { Button } from "@chakra-ui/react";
import { BigNumber, ethers } from "ethers";
import React, { useState } from "react";

type Props = {
  news_id: number;
  slug: string;
  transaction_id: string;
};

function ClaimNews({ news_id, slug, transaction_id, ...props }: Props & Toast) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const _getSignature = async (news_id: number) => {
    const { data } = await AxiosInstance.put("/api/news/managed-claim", {
      news_id,
    });
    return data;
  };

  const _claimToken = async (signature: SnewsSignature) => {
    console.log(signature);
    const config = await prepareWriteSnews({
      address: SNEWS_CONTRACT_ADDRESS,
      functionName: "claimToken",
      args: [
        slug,
        transaction_id,
        {
          v: signature.v,
          r: signature.r,
          s: signature.s,
          deadline: 0 as any,
        },
      ],
    });

    const { hash } = await writeSnews(config);

    return hash;
  };
  const handleUserClaimNews = async (news_id: number) => {
    try {
      setIsLoading(true);
      const signature = await _getSignature(news_id);
      const txhash = await _claimToken(signature);
      console.log(txhash);
    } catch (error: any) {
      props.error?.(
        error?.response
          ? error.response.data.message
          : "Execution reverted: Signature invalid"
      );
      setIsLoading(false);
    }
  };
  return (
    <Button
      colorScheme="blue"
      isLoading={isLoading}
      onClick={() => handleUserClaimNews(news_id)}
    >
      Claim Now
    </Button>
  );
}

const WrapperClaimNews = withToast(ClaimNews);
export default WrapperClaimNews;
