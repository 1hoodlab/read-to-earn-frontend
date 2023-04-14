import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, Text, } from '@chakra-ui/react'
import Image from "next/image";

export default function Infomation() {
    return (
        <Box className={styles.infomation} marginTop={"1px"} paddingTop={"44px"}>
            <Box>
                <Image
                    src={"/image/cover.png"}
                    alt={"12"}
                    width={1164}
                    height={226}>
                </Image>
            </Box>
            <Box display={"flex"}>
                <Box>
                    <Image
                        src={"/image/avatar.png"}
                        alt={"12"}
                        width={163}
                        height={163}
                        className={styles.avatar}
                    >
                    </Image>
                </Box>
                <Box>
                    <Text fontWeight={700} fontSize={"20px"} lineHeight={"24.2px"} marginTop={"14px"}>
                        John Snow
                    </Text>

                    <Text fontWeight={500} fontSize={"12px"} lineHeight={"14.52px"} color={"#909090"} marginTop={"4px"}>
                        Hanoi, Vietnam
                    </Text>


                </Box>
            </Box>
        </Box >
    )
}
