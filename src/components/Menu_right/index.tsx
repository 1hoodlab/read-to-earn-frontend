import { Text, Box, Button, ButtonGroup, Stack, Image, Input } from '@chakra-ui/react'
import React from 'react'
import styles from "@/styles/Home.module.scss";

export default function index() {
    return (
        <Box marginLeft={"55px"} marginTop={"106px"}>
            <Stack spacing={4} direction='row' align='center'>
                <Button minWidth={"153px"} borderRadius={0} backgroundColor={"#000000"} color={"#ffffff"} >
                    Preview
                </Button>
                <Button minWidth={"153px"} borderRadius={0} colorScheme='red'>
                    Publish
                </Button>
            </Stack>

            <Text padding={"14px"} fontSize="normal" color={"#758091"} fontWeight={700} letterSpacing={"0.04em"}>
                Category
            </Text>
            <Box display={"flex"} border={"1px solid #B8BDC9"} borderRadius={"15px"} height={"48px"} maxWidth={"323px"}>

                <Box width={"104px"} height={"31px"} backgroundColor={"#ECF2F7"} borderRadius={"16px"} marginTop={"7px"} marginLeft={"12px"} >
                    <Text lineHeight={"31px"} textAlign={"center"} fontSize={"10px"} fontWeight={700} color={"#757E8D"}>Blockchain</Text>
                </Box>
                <Box marginLeft={"165px"} marginTop={"11px"}>
                    <Image src="/Create_new/add.svg"></Image>
                </Box>
            </Box>

            <Text padding={"14px"} fontSize="normal" color={"#758091"} fontWeight={700} letterSpacing={"0.04em"}>
                Tag
            </Text>
            <Box display={"flex"} border={"1px solid #B8BDC9"} borderRadius={"15px"} height={"48px"} maxWidth={"323px"}>

                <Box width={"104px"} height={"31px"} backgroundColor={"#ECF2F7"} borderRadius={"16px"} marginTop={"7px"} marginLeft={"12px"} >
                    <Text lineHeight={"31px"} textAlign={"center"} fontSize={"10px"} fontWeight={700} color={"#757E8D"}>Blockchain</Text>
                </Box>
                <Box marginLeft={"165px"} marginTop={"11px"}>
                    <Image src="/Create_new/add.svg"></Image>
                </Box>
            </Box>

            <Box display={"flex"}>
                <Box>
                    <Text padding={"14px"} fontSize="normal" color={"#758091"} fontWeight={700} letterSpacing={"0.04em"}>
                        Earn Money
                    </Text>
                </Box>
                <Box marginLeft={"150px"} marginTop={"18px"}>
                    <Image src="Create_new/switch.png" height={"18px"} width={"35px"}></Image>
                </Box>
            </Box>

            <Input maxWidth={"322px"} height={"51px"} border={"1px solid #B8BDC9"} borderRadius={"15px"} placeholder="Total Supply" />

        </Box >
    )
}
