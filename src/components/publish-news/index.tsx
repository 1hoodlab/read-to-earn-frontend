import { PAYMENT_TOKEN_ID } from "@/constant";
import {
  SNEWS_CONTRACT_ADDRESS,
  USDT_CONTRACT_ADDRESS,
} from "@/constant/network";
import {
  prepareWriteErc20,
  prepareWriteSnews,
  readErc20,
  writeErc20,
  writeSnews,
} from "@/generated";
import withToast from "@/hoc/withToast";
import { Button, useToast } from "@chakra-ui/react";
import { BigNumber, BigNumberish, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";

type Props = {
  totalSupply: string;
  slug: string;
};
type Toast = {
  success?(title?: string, description?: string): any;
  error?(title?: string, description?: string): any;
};
function PublishNews({ totalSupply = "10", slug, ...props }: Props & Toast) {
  const { address } = useAccount();
  const [allowance, setAllowance] = useState<BigNumber | undefined>(undefined);
  const [reload, setReload] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSuccess = (response: ethers.providers.TransactionReceipt) => {
    console.log(response);
    setIsLoading(false);
    setReload(!reload);
    props.success?.("Done");
  };
  const onFailed = () => {
    setIsLoading(false);
    setReload(!reload);
    props.error?.("Publish failed!");
  };
  const _getAllowance = async () => {
    let data = await readErc20({
      address: USDT_CONTRACT_ADDRESS,
      functionName: "allowance",
      args: [address as `0x${string}`, SNEWS_CONTRACT_ADDRESS],
    });
    setAllowance(data);
  };

  const _approveToken = async (totalSupply: string) => {
    if (allowance?.gte(ethers.utils.parseEther(totalSupply))) return true;
    const config = await prepareWriteErc20({
      address: USDT_CONTRACT_ADDRESS,
      functionName: "approve",
      args: [SNEWS_CONTRACT_ADDRESS, ethers.utils.parseEther(totalSupply)],
    });
    let { wait } = await writeErc20(config);
    const response = await wait();
    return response ? true : false;
  };

  const handlePublishNews = async () => {
    setIsLoading(true);
    try {
      let data = await _approveToken(totalSupply);
      if (data) {
        const config = await prepareWriteSnews({
          address: SNEWS_CONTRACT_ADDRESS,
          functionName: "createNews",
          args: [slug, PAYMENT_TOKEN_ID, ethers.utils.parseEther(totalSupply)],
        });

        const { wait } = await writeSnews(config);

        const transactionReceipt = await wait();

        transactionReceipt && onSuccess(transactionReceipt);
      }
    } catch (error) {
      onFailed();
    }
  };

  useEffect(() => {
    _getAllowance();
  }, []);

  return (
    <div>
      <Button isLoading={isLoading} onClick={() => handlePublishNews()}>
        Publish
      </Button>
    </div>
  );
}

const PublishNewsWithToast = withToast(PublishNews);

export default PublishNewsWithToast;
