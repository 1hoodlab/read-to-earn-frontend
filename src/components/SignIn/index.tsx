import React, { useEffect, useState } from "react";
import ButtonRte from "../button";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import withNoSSR from "../NoSSR";
import { beautifyAddress } from "@/utils";
import axios from "axios";
type Props = {};

function SignIn({}: Props) {
  const { connect, connectors, isLoading } = useConnect();
  const { address, isConnected } = useAccount();
  const [isLogin, setIsLogin] = useState<boolean>(
    localStorage.getItem("access_token") ? true : false
  );
  const { disconnect } = useDisconnect();

  const { signMessage, isSuccess } = useSignMessage({
    async onSuccess(data) {
      try {
        const { headers, data: dataResponse } = await axios({
          url: "/api/auth",
          method: "post",
          data: {
            wallet_address: address,
            msg_signature: data,
          },
        });
        localStorage.setItem("access_token", headers["authorization"]);
        localStorage.setItem("data", JSON.stringify(dataResponse));
      } catch (error) {
        setIsLogin(false);
        disconnect();
      }
    },
    onError() {
      setIsLogin(false);
      localStorage.removeItem("access_token");
      disconnect();
    },
  });

  const _getMetamaskMessage = async (address: string) => {
    const { data } = await axios({
      url: `/api/auth/${address}`,
      method: "get",
    });
    return data;
  };

  const _handleLoginWithMetamask = async (address: any) => {
    const message = await _getMetamaskMessage(address);
    signMessage({ message });
  };

  const handleDisconnected = async () => {
    disconnect();
    setIsLogin(false);
    localStorage.removeItem("access_token");
  };
  useEffect(() => {
    if (isConnected && !isLogin) {
      _handleLoginWithMetamask(address);
    }
  }, [isConnected]);

  return !isConnected ? (
    <Box>
      <ButtonRte
        title="Login"
        isLoading={isLoading}
        onClick={() => connect({ connector: connectors[0] })}
      />
    </Box>
  ) : (
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
      <Avatar name={"Metamask Account"} size={"sm"} />
    </Box>
  );
}

export default withNoSSR(SignIn);
