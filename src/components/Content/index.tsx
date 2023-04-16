import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, Text, Input, Image } from "@chakra-ui/react";


export default function index() {
    return (

        <Box>

            <Box minWidth={"788px"} >
                <Box display={"flex"} >
                    <Image
                        marginTop={"39px"}
                        marginLeft={"7px"}
                        src={"/Create_new/Vector.svg"}
                        alt={"456"}
                        width={"30px"}
                        height={"30px"}
                    />

                    <Text padding={"38px"} fontSize="20px" fontWeight="bold">
                        Create News
                    </Text>
                </Box>


                <Input borderRadius={"15px "} border={"1.5px solid #B8BDC9"} placeholder='Enter new title' />

                <Text padding={"14px"} fontSize="normal" color={"#758091"} fontWeight={700} letterSpacing={"0.07em"}>
                    Upload Thumbnail
                </Text>

                <Box border={"1px dashed #B8BDC9"} borderRadius={"20px"}>
                    <Image
                        marginLeft={"auto"}
                        marginRight={"auto"}
                        src={"/Create_new/note.png"}>

                    </Image>

                    <Box marginLeft={"280px"} display={"flex"}>
                        <Text font-style={"normal"} color={"#000000"} fontWeight={500} >Drop your file(s) here or </Text>
                        <Text font-style={"normal"} color={"#1463FF"} fontWeight={500} marginLeft={"2px"} > browser</Text>
                    </Box>
                    <Text padding={"15px"} textAlign={"center"} fontSize={"10px"} color={"#B8BDC9"} fontWeight={400}>Max. file size 5MB</Text>

                </Box>
                <Text padding={"14px"} fontSize="normal" color={"#758091"} fontWeight={700} letterSpacing={"0.07em"}>
                    Upload Content
                </Text>

                <Box border={"1px dashed #B8BDC9"} borderRadius={"20px"}>
                    <Image
                        marginLeft={"auto"}
                        marginRight={"auto"}
                        src={"/Create_new/note.png"}>

                    </Image>

                    <Box marginLeft={"280px"} display={"flex"}>
                        <Text font-style={"normal"} color={"#000000"} fontWeight={500} >Drop your file(s) here or </Text>
                        <Text font-style={"normal"} color={"#1463FF"} fontWeight={500} marginLeft={"2px"} > browser</Text>
                    </Box>
                    <Text padding={"15px"} textAlign={"center"} fontSize={"10px"} color={"#B8BDC9"} fontWeight={400}>Max. file size 5MB</Text>

                </Box>

            </Box>
        </Box >



    )
}

