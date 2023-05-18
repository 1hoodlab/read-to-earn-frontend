import AxiosInstance from "@/axiosInstance";
import { formatDMMMMYYYY } from "@/utils";
import { Box, Button, Heading, Image, Text, useToast } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import SocketIOClient, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { useAccount } from "wagmi";

const ClaimStatus = {
  pending: "pending",
  success: "success",
  failure: "failure",
};

interface Props {
  id: number;
  token_id: number;
  title: string;
  thumbnail: string;
  content_url: string;
  cid: string;
  total_supply: string;
  payment_token: number;
  min_read: number;
  author_id: number;
  created_at: string;
  slug: string;
  content: string;
}

var socket: Socket<DefaultEventsMap, DefaultEventsMap>;
var roomId: string;

export default function NewsDetail(props: Props) {
  const { isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClaim, setIsClaim] = useState<boolean>(false);

  const toast = useToast();

  const socketInitializer = async () => {
    var localStorageData;

    socket = SocketIOClient(process.env.NEXT_PUBLIC_WEBSOCKET_URL as string, {
      transports: ["websocket", "polling"],
    });

    socket.emit("PING_PONG", "PING");

    socket.on("connect", () => {
      console.log("connected");
    });

    const localStorageDataRaw = localStorage.getItem("data");

    if (localStorageDataRaw) {
      localStorageData = JSON.parse(localStorageDataRaw);
    }

    let isScroll = false;
    if (
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight
    ) {
      isScroll = true;
    }

    socket.emit(
      "JOIN_ROOM",
      JSON.stringify({
        slug: props.slug,
        user_id: localStorageData.user_id,
        is_scroll: isScroll,
        reader_token: localStorageData.access_token,
      })
    );

    socket.on("RESULT", (data: any) => {
      setIsLoading(false);
      toast({
        variant: "left-accent",
        title: data.status,
        position: "top-right",
        status: data.status === ClaimStatus.failure ? "error" : "info",
        description: data.status === ClaimStatus.failure ? "Sorry you can't claim news token" : "Congratulation 🥳. Please view the detail in the profile"
      });
    });

    socket.on("LOG", (data: any) => {
      console.log(data);
    });

    socket.on("ROOM", (data: any) => {
      console.log(`You join room: ${data}`);
      roomId = data;
    });
  };

  const unSubcribe = () => {
    socket &&
      socket.emit(
        "UNSUBCRIBE",
        JSON.stringify({
          roomId: roomId,
        })
      );
  };

  const ScrollDetecting = () => {
    window.addEventListener("scroll", () => {
      if (typeof window !== "undefined") {
        var winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        var height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        var scrolled = (winScroll / height) * 100;

        scrolled >= 99 ? setIsClaim(true) : setIsClaim(false);

        socket &&
          socket.emit(
            "TRACKING_SCROLL",
            JSON.stringify({
              roomId: roomId,
              trackingScroll: scrolled,
            })
          );
      }
    });
  };

  const FocusDetecting = () => {
    window.addEventListener("focus", () => {
      if (document.hasFocus()) {
        socket &&
          socket.emit(
            "TRACKING_UNFOCUSED",
            JSON.stringify({
              roomId: roomId,
              trackingUnfocused: true,
            })
          );
      }
    });
  };

  const NextTabDetecting = () => {
    window.addEventListener("visibilitychange", () => {
      if (document.visibilityState !== "visible" || document.hasFocus()) {
        socket &&
          socket.emit(
            "TRACKING_NEXT_TAB",
            JSON.stringify({
              roomId: roomId,
              trackingNextTab: true,
            })
          );
      }
    });
  };

  const handleClaim = () => {
    console.log(roomId);
    setIsLoading(true);
    socket &&
      socket.emit(
        "SUBMIT",
        JSON.stringify({
          roomId: roomId,
        })
      );
  };

  useEffect(() => {
    if (isConnected) {
      socketInitializer();

      ScrollDetecting();
      NextTabDetecting();
      FocusDetecting();
    }

    return () => unSubcribe();
  }, [isConnected]);

  return (
    <>
      <NextSeo
        title={props.title}
        description={props.content}
        openGraph={{
          locale: "en_IE",
          title: props.title,
          images: [
            {
              url: props.thumbnail,
              width: 800,
              height: 600,
              alt: `Banner ${props.title}`,
            },
          ],
        }}
      />
      <Box marginBottom={"30px"}>
        <Heading
          textAlign={"center"}
          fontWeight={900}
          fontSize={"35px"}
          paddingTop={"30px"}
          letterSpacing={"0.02em"}
          lineHeight={"50px"}
        >
          {props.title}
        </Heading>

        <Text
          textAlign={"center"}
          color={"white.300"}
          fontSize={"sm"}
          marginY={"10px"}
          fontWeight={600}
          lineHeight={"15px"}
        >
          {formatDMMMMYYYY(props.created_at)}
        </Text>
        <Box marginY={"20px"}>
          <Image
            src={props.thumbnail}
            w={"full"}
            height={"300px"}
            objectFit={"cover"}
          />
        </Box>
        <Box>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={ChakraUIRenderer()}
          >
            {props.content}
          </ReactMarkdown>
        </Box>
        <Box
          display={!isClaim ? "none" : "inline-block"}
          marginBottom={"10px"}
          position={"fixed"}
          bottom={0}
          right={0}
          padding={"20px"}
        >
          <Button
            onClick={handleClaim}
            isLoading={isLoading}
            variant={"black"}
            width={"55px"}
            height={"55px"}
            borderRadius={"50%"}
          >
            <RiMoneyDollarCircleLine fontSize={"55px"} />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const {
    query: { slug },
  } = ctx;

  const { data } = await AxiosInstance.get(`/news/${slug}`);
  let response = await fetch(data.content_url);
  const jsonData = await response.text();

  return {
    props: {
      ...data,
      content: jsonData,
    }, // will be passed to the page component as props
  };
}
