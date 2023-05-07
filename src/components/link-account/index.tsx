import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { MetamaskIcon } from "../icon/Metamask";
import AxiosInstance from "@/axiosInstance";
import { generateMessageLinkAccount } from "@/utils";
import { useSignMessage } from "wagmi";
import withToast from "@/hoc/withToast";
import { Toast, UserInformationType } from "@/constant";

const mock =
  " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

type Props = {
  address: `0x${string}` | undefined;
  userid: string;
  userInfo: UserInformationType;
  setUserInfo: React.Dispatch<
    React.SetStateAction<UserInformationType | undefined>
  >;
};

function LinkAccount({
  address,
  userid,
  userInfo,
  setUserInfo,
  success,
  error,
}: Props & Toast) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSuccess = (data: any) => {
    success?.(data?.message);
    setUserInfo({
      ...userInfo,
      wallet_address: address as string,
    });
    setIsLoading(false);
  };

  const _handleLinkAccount = async (signature: string) => {
    try {
      const { data } = await AxiosInstance.post("/api/user/link-account", {
        wallet_address: address,
        signature: signature,
      });
      onSuccess(data);
    } catch (e: any) {
      error?.("Link accound failed!");
      setIsLoading(false);
    }
  };

  const handleSignatureMessage = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    signMessage({
      message: generateMessageLinkAccount(userid as string, address),
    });
  };

  const { signMessage } = useSignMessage({
    async onSuccess(signature) {
      _handleLinkAccount(signature);
    },
    onError({ message, name }) {
      error?.(name, message);
      setIsLoading(false);
    },
  });

  return (
    <Grid
      padding={"26px 40px 26px 40px"}
      marginBottom={"10px"}
      templateColumns="repeat(3, 1fr)"
      w={"full"}
      background={"white"}
      boxShadow={"1px 4px 7px rgba(0, 0, 0, 0.25)"}
      borderRadius={"3px"}
    >
      <GridItem colSpan={2}>
        <Text
          fontWeight={"600"}
          fontSize={"16px"}
          lineHeight={"24px"}
          marginBottom={"8px"}
        >
          Connect Account
        </Text>
        <Text
          color={"#909090"}
          maxW={"90%"}
          fontSize={"12px"}
          letterSpacing={"0.04em"}
          lineHeight={"16px"}
        >
          {mock}
        </Text>
      </GridItem>

      <GridItem
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          width={"full"}
          colorScheme={"red"}
          leftIcon={<MetamaskIcon boxSize={"25px"} />}
          fontSize={"14px"}
          size={"lg"}
          isLoading={isLoading}
          onClick={handleSignatureMessage}
        >
          Link account with Metamask
        </Button>
      </GridItem>
    </Grid>
  );
}

export default withToast(LinkAccount);
