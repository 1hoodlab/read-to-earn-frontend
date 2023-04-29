import { DataStorageType } from "@/constant";
import { beautifyAddress } from "@/utils";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  handleDisconnected(): void;
  address: string | undefined;
  isSuccess: boolean;
  isLogin: boolean;
  name?: string;
};

export default function Account({
  handleDisconnected,
  address,
  isSuccess,
  isLogin,
  name = "Metamask Account",
}: Props) {
  const router = useRouter();

  const handleGoToProfile = () => {
    const localStorageData = localStorage.getItem("data");
    if (!localStorageData) throw new Error("Login please");

    const userInfo = JSON.parse(localStorageData) as DataStorageType;
    router.push(`/profile/${userInfo.user_id}`);
  };
  return (
    <Box display={"inline-flex"} gap={3}>
      <Box textAlign={"right"}>
        <Text fontWeight={800} fontSize={"10px"}>
          {beautifyAddress(address, 4, 5)}
        </Text>
        <Text
          color={"#A3A3A3"}
          fontWeight={500}
          fontSize={"10px"}
          cursor={"pointer"}
          onClick={() =>
            isSuccess || isLogin ? handleDisconnected() : console.log("test")
          }
          _hover={{
            color: "black",
          }}
        >
          {isSuccess || isLogin ? "Logout" : "Verifying"}
        </Text>
      </Box>
      <Popover placement="bottom-end">
        {({}) => (
          <>
            <PopoverTrigger>
              <Avatar name={name} size={"sm"} cursor={"pointer"} />
            </PopoverTrigger>
            <PopoverContent
              bg="white"
              borderRadius={"2px"}
              width={"200px"}
              boxShadow={"0px 4px 10px 1px rgba(0, 0, 0, 0.25);"}
            >
              <PopoverBody padding={0}>
                <List spacing={2}>
                  <ListItem
                    fontSize={"12px"}
                    fontWeight={"bold"}
                    paddingLeft={5}
                    paddingTop={5}
                    cursor={"pointer"}
                    onClick={handleGoToProfile}
                  >
                    Profile
                  </ListItem>
                  <ListItem
                    fontSize={"12px"}
                    fontWeight={"bold"}
                    paddingLeft={5}
                  >
                    Setting
                  </ListItem>

                  <Divider variant={"solid"} />
                  <ListItem
                    fontSize={"12px"}
                    fontWeight={"bold"}
                    paddingLeft={5}
                  >
                    Guide
                  </ListItem>
                  <ListItem
                    fontSize={"12px"}
                    fontWeight={"bold"}
                    paddingLeft={5}
                    paddingBottom={5}
                  >
                    Help Center
                  </ListItem>
                </List>
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </Box>
  );
}
