import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  return (
    <svg
      width="20"
      height="26"
      viewBox="0 0 20 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0416 0.143372C18.9725 -0.316633 20.0591 0.389838 19.9975 1.41502L19.0342 17.4575C18.9727 18.4827 17.8091 19.0577 16.9399 18.4925L3.337 9.64841C2.46772 9.08323 2.54467 7.80175 3.4755 7.34175L18.0416 0.143372Z"
        fill="black"
        fill-opacity="0.8"
      />
      <path
        d="M1.9364 17.489C0.997255 17.9322 -0.0761584 17.2064 0.00425983 16.1825L0.313437 12.246C0.393855 11.222 1.56779 10.668 2.42652 11.2486L5.72801 13.481C6.58674 14.0617 6.48622 15.3416 5.54707 15.7848L1.9364 17.489Z"
        fill="black"
        fill-opacity="0.8"
      />
      <path
        d="M8.81368 25.8621C7.8786 26.3136 6.79862 25.5973 6.86971 24.5728L7.3894 17.083C7.46049 16.0584 8.62933 15.494 9.49332 16.067L15.8091 20.2558C16.6731 20.8288 16.5842 22.1096 15.6492 22.5611L8.81368 25.8621Z"
        fill="black"
        fill-opacity="0.8"
      />
    </svg>
  );
};

export default function Footer() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Spirity.JSC - All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
