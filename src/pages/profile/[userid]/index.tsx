import { Avatar, Box, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

import React from "react";
import { MetamaskIcon } from "@/components/icon/Metamask";

type Props = {};

const mock =
  " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
export default function ProfilePage({}: Props) {
  return (
    <Box marginTop={"40px"}>
      <Box>
        <Box
          background={
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEyG3wWx2ZIDV3U4p1LqH8hhMdZGpIhOwzbLb-ORrFrqQNKmobBkimj3AxXvBvq4rQAA&usqp=CAU')"
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
            showBorder={true}
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />
          <Box margin={"0px 0px 12px 12px"}>
            <Text fontSize={"larger"} fontWeight={"700"} lineHeight={"25px"}>
              John Snow
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
        <GridItem margin={"auto"}>
          <Button
            colorScheme={"red"}
            leftIcon={<MetamaskIcon boxSize={"25px"} />}
            fontSize={"14px"}
            size={"lg"}
          >
            Link account with Metamask
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}
