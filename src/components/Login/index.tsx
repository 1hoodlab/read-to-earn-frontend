import { Box, Button, Text } from "@chakra-ui/react";
// import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { relative } from "path";
// import Register from "../../pages/Register";
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


                <Box width={608} height={633} background={"#FFFFFD"} marginTop={70} marginLeft={"auto"} marginRight={"auto"} textAlign={"center"}>
                    <Text fontWeight={700} fontSize={"30px"} lineHeight={"36px"}>Welcome back!</Text>
                    <Text fontWeight={500} fontSize={"12px"} lineHeight={"14.52px"} color={"#666666"}>Continue with Google or enter your details.</Text>
                    <Box border={"2px solid #000000"}
                        borderRadius={6}
                        width={352}
                        marginLeft={"auto"}
                        marginRight={"auto"}
                        display={"flex"}
                        padding={4} >
                        <Image src="/img/logoGoogle.png" alt="logo Google"
                            height={20}
                            width={20}
                        />
                        <Text fontWeight={600} fontSize={"14px"} lineHeight={"16.94px"}>Login with Google</Text>
                    </Box>
                    <Box display={"flex"} textAlign={"center"} marginLeft={"auto"} marginRight={"auto"}>
                        <Box height={0.3} background={"#DFDFDF"} width={220} marginTop={1.5} marginLeft={"auto"} ></Box>
                        <Text fontWeight={600} fontSize={"14px"} lineHeight={"16.94px"} width={41}>Or</Text>
                        <Box height={0.3} background={"#DFDFDF"} width={220} marginTop={1.5} marginRight={"auto"}></Box>
                    </Box>
                </Box>


            </Box >
        </>
    )
}
