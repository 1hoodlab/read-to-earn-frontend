import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, Text, Button } from '@chakra-ui/react'
import Image from "next/image";

export default function Content() {
    return (
        <Box className={styles.content}>

            <Box className={styles.content_list} display={"flex"} height={"151px"} >
                <Box className={styles.content_item} padding={"25px"}>
                    <Text fontWeight={600} fontSize={"20px"} lineHeight={"24.2px"} marginBottom={"8px"}>
                        Connect Account
                    </Text>
                    <Text maxWidth={710} fontWeight={500} fontSize={"12px"} lineHeight={"16px"} color={"#909090"}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged
                    </Text>
                </Box>
                <Button marginLeft={"80px"} backgroundColor={"#FF6161"}
                >
                    <Image
                        src={"/image/icons8-metamask-logo-100 1@2x.png"}
                        alt={"metamask"}
                        width={31}
                        height={31}>
                    </Image>
                    <Text fontWeight={600} fontSize={"12px"} letterSpacing={"4%"}
                        lineHeight={"16px"} color={"#ffffff"} marginLeft={"12px"}>
                        Link account with Metamask</Text>
                </Button>
            </Box>

            <Box className={styles.content_list} display={"flex"} height={"151px"} marginTop={"37px"} >
                <Box className={styles.content_item} padding={"25px"}>
                    <Text fontWeight={600} fontSize={"20px"} lineHeight={"24.2px"} marginBottom={"8px"}>
                        Create news
                    </Text>
                    <Text maxWidth={710} fontWeight={500} fontSize={"12px"} lineHeight={"16px"} color={"#909090"}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged
                    </Text>
                </Box>
                <Button marginLeft={"80px"} backgroundColor={"#000000"}
                >
                    <Text fontWeight={600} fontSize={"12px"} letterSpacing={"4%"}
                        lineHeight={"16px"} color={"#ffffff"} marginLeft={"12px"}
                    >
                        Create
                    </Text>
                </Button>
            </Box>

            <Box className={styles.content_list} height={"151px"} marginTop={"37px"} >
                <Box className={styles.content_item} padding={"25px"} paddingBottom={"23px"} display={"flex"}>
                    <Text fontWeight={600} fontSize={"20px"} lineHeight={"24.2px"} >
                        Statistic
                    </Text>
                    <Text fontWeight={600}
                        fontSize={"20px"}
                        lineHeight={"24.2px"}
                        color={"#0038FF"}
                        marginLeft={"5px"} >
                        Comming Soon
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}