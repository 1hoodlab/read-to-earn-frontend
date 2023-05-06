import { Avatar, Box, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import React, { useEffect, useMemo, useState } from "react";
import { MetamaskIcon } from "@/components/icon/Metamask";
import { useAccount, useSignMessage } from "wagmi";
import { beautifyAddress, generateMessageLinkAccount } from "@/utils";
import { useRouter } from "next/router";
import { Role, UserInformationType } from "@/constant";
import AxiosInstance from "@/axiosInstance";
import ClaimNewsTable from "@/components/claim-news-table";
import { useLoadingPageContext } from "@/context/loading.context";
import LinkAccount from "@/components/link-account";
import { pixelArtNeutral } from "@dicebear/collection";
import withNoSSR from "@/components/NoSSR";

//@ts-ignore
import { createAvatar } from "@dicebear/core";
import CreateNews from "@/components/create-news";

function ProfilePage() {
  const { query } = useRouter();
  const { address } = useAccount();

  const { onClose, onOpen } = useLoadingPageContext();

  const [userInfo, setUserInfo] = useState<UserInformationType | undefined>(
    undefined
  );

  const [userClaimNewsData, setUserClaimNewsData] = useState<any>([]);
  const _handleGetUserDetail = async () => {
    const { data } = await AxiosInstance.get("/api/user/detail");
    setUserInfo(data);
    onClose();
  };

  const _handleGetUserClaimNews = async () => {
    const { data } = await AxiosInstance.get("/api/news/claims");
    setUserClaimNewsData(data);
  };

  const avatar = useMemo(() => {
    return createAvatar(pixelArtNeutral, {
      size: 10,
      seed: address,
      // ... other options
    }).toDataUriSync();
  }, []);

  useEffect(() => {
    onOpen();
    _handleGetUserDetail();
    _handleGetUserClaimNews();
  }, []);

  return (
    <>
      <Box marginTop={"40px"}>
        <Box>
          <Box
            backgroundImage={
              "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);"
            }
            w={"full"}
            h={"200px"}
            borderRadius={"3px"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}
          />
          <Box
            display={"inline-flex"}
            alignItems={"flex-end"}
            position={"relative"}
            transform={"translate(30%, -48%)"}
          >
            <Avatar
              background={"white"}
              showBorder={true}
              borderColor={"blackAlpha.100"}
              size="2xl"
              name="Segun Adebayo"
              src={avatar}
            />
            <Box margin={"0px 0px 12px 12px"}>
              <Text fontSize={"larger"} fontWeight={"700"} lineHeight={"25px"}>
                {beautifyAddress(address, 4, 5)}
              </Text>
              <Text
                fontSize={"sm"}
                color={"#909090"}
                display={"flex"}
                alignItems={"center"}
              >
                <ReactCountryFlag
                  countryCode="VN"
                  svg
                  style={{ marginRight: "3px" }}
                />
                Hanoi, Vietnam
              </Text>
            </Box>
          </Box>
        </Box>
        {userInfo && !userInfo?.wallet_address && (
          <LinkAccount
            userid={query.userid as string}
            address={address}
            setUserInfo={setUserInfo}
            userInfo={userInfo}
          />
        )}
        {userInfo && userInfo.role === Role.WRITER && <CreateNews />}
        {userInfo && userInfo.role === Role.READER && (
          <ClaimNewsTable data={userClaimNewsData} />
        )}
      </Box>
    </>
  );
}

export default withNoSSR(ProfilePage);
