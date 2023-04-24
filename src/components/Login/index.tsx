import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

interface LoginProps {
    isVisible: boolean;
    onClose: () => void;
}
export default function Login({ isVisible, onClose }: LoginProps) {
    const router = useRouter();
    function google() {
        router.push('/#')
    }
    if (!isVisible) return null;
    return (
        <>

            <Box position={"fixed"} inset={0} background={"rgba(24, 21, 21, 0.82)"} zIndex={10} >
                <Box width={608} height={570} background={"#FFFFFD"} marginTop={70}
                    marginLeft={"auto"} marginRight={"auto"}
                    textAlign={"center"} paddingLeft={67} paddingRight={67} paddingTop={35}>
                    <Text fontWeight={700} fontSize={"30px"} lineHeight={"36px"} >Welcome back!</Text>
                    <Text fontWeight={500} fontSize={"12px"} lineHeight={"14.52px"} color={"#666666"} marginTop={1}>
                        Continue with Google or enter your details.
                    </Text>
                    <Box border={"2px solid #000000"}
                        borderRadius={6}
                        width={352}
                        marginLeft={"auto"}
                        marginRight={"auto"}
                        display={"flex"}
                        padding={4}
                        justifyContent={"center"}
                        marginTop={34} >
                        <Image src="/img/logoGoogle.png"
                            alt="logo Google"
                            width={20}
                            height={20}
                        />
                        <Text fontWeight={600} fontSize={"14px"} lineHeight={"16.94px"} textAlign={"center"} marginLeft={1.5}>Login with Google</Text>
                    </Box>
                    <Box display={"flex"} textAlign={"center"} marginLeft={"auto"} marginRight={"auto"} marginTop={34}>
                        <Box height={0.3} background={"#DFDFDF"} width={220} marginTop={1.5} marginLeft={"auto"} ></Box>
                        <Text fontWeight={600} fontSize={"14px"} lineHeight={"16.94px"} width={41}>Or</Text>
                        <Box height={0.3} background={"#DFDFDF"} width={220} marginTop={1.5} marginRight={"auto"}></Box>
                    </Box>
                    <Box marginTop={50}>
                        <Text textAlign={"left"} fontWeight={500} fontSize={"14px"} lineHeight={"16.94px"}>Email</Text>
                        <Box height={0.5} background={"#DFDFDF"} width={"full"} marginTop={1} ></Box>
                    </Box>
                    <Box marginTop={10}>
                        <Text textAlign={"left"} fontWeight={500} fontSize={"14px"} lineHeight={"16.94px"} >Password</Text>
                        <Box height={0.5} background={"#DFDFDF"} width={"full"} marginTop={1} ></Box>
                        <Text textAlign={"right"} fontWeight={600} fontSize={"14px"} lineHeight={"16.94px"} marginTop={1}>Forgot password?</Text>
                    </Box>
                    <Button width={"full"} height={47} background={"#000000"} color={"#ffffff"} marginTop={50}>Login</Button>
                    <Flex justifyContent={"center"} marginTop={3}>
                        <Text fontWeight={500} fontSize={"14px"} lineHeight={"16.94px"}>Don’t have an account? </Text>
                        <Text fontWeight={600} fontSize={"14px"} lineHeight={"16.94px"}> Sign up for free </Text>
                    </Flex>
                </Box>
            </Box >
        </>
    )
}
