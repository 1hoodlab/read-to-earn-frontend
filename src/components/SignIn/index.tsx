import React, { useEffect, useState } from "react";
import ButtonRte from "../button";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { Box } from "@chakra-ui/react";
import withNoSSR from "../NoSSR";
import axios from "axios";
import Account from "./account";
import { useRouter } from "next/router";
import { ConnectKitButton } from "connectkit";
type Props = {};

function SignIn({}: Props) {
  const { isLoading } = useConnect();
  const { address, isConnected } = useAccount();
  const [isLogin, setIsLogin] = useState<boolean>(
    localStorage.getItem("access_token") ? true : false
  );
  const { disconnect } = useDisconnect();
  const { push } = useRouter();
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
    localStorage.removeItem("data");
    push("/");
  };
  useEffect(() => {
    if (isConnected && !isLogin) {
      _handleLoginWithMetamask(address);
    }
  }, [isConnected]);

  // return !isConnected ? (
  //   <Box>
  //     <ButtonRte
  //       title="Login"
  //       isLoading={isLoading}
  //       onClick={() => connect({ connector: connectors[0] })}
  //     />
  //   </Box>
  // ) : (
  //   <Account
  //     handleDisconnected={handleDisconnected}
  //     isLogin={isLogin}
  //     address={address}
  //     isSuccess={isSuccess}
  //   />
  // );
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return !isConnected ? (
          <Box>
            <ButtonRte title="Login" isLoading={isLoading} onClick={show} />
          </Box>
        ) : (
          <Account
            handleDisconnected={handleDisconnected}
            isLogin={isLogin}
            address={address}
            isSuccess={isSuccess}
          />
        );
      }}
    </ConnectKitButton.Custom>
  );
}

export default withNoSSR(SignIn);
