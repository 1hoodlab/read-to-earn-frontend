import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, Text, Button, Flex } from '@chakra-ui/react'
import Image from "next/image";
import RTETag from "@/components/RTETag";
// import TagFree from "@/components/TagFree";

export default function FirstArticle() {
    return (
        <>

            {/* // first Article */}
            {/* <Box background={"#D9D9D9"} height={151} width={151} transform={"90deg"} ></Box> */}
            <Image
                src={"/img/white.png"}
                height={120}
                width={120}
                alt=''
                id={styles.white}
            />
            <Box className={styles.firstArticle} display={"flex"}>
                <Image src="/img/article1.png"
                    alt=""
                    className={styles.firstArticle_list}
                    height={275}
                    width={523.0850830078125}
                    id={styles.img} />
                <Box className={styles.firstArticle_list} id={styles.firstArticle_list_title} marginTop={0}>
                    <Text className={styles.firstArticle_item} id={styles.firstArticle_item_title} fontSize={32} >
                        Web wallet Xverse added support for NFTs on the Bitcoin network
                    </Text>
                    <Box background={"#F0E821"} height={18} width={158} marginTop={-5} marginLeft={-1.5}></Box>
                    <Box id={styles.firstArticle_item_earn}>
                        <RTETag isEarn={true} />
                    </Box>
                    <Text className={styles.firstArticle_item} id={styles.firstArticle_item_main_content}>
                        If you use the Ordinals protocol,
                        which allows you to inscribe NFT data onto the Bitcoin
                    </Text>
                    <Text className={styles.firstArticle_item} id={styles.firstArticle_item_content}>
                        Cyber-crime and money laundering were covered in a separate chapter.
                        But it seems that all regulators' songs have this refrain that they keep using.
                        Cyber-crime and money laundering were covered in a separate chapter. But it seems
                        <strong> Read More...</strong>
                    </Text>
                </Box>
            </Box>

            {/* second Article */}
            <Box className={styles.secondArticle_head}>
                <Box>
                    <Text className={styles.secondArticle_head_item} id={styles.Fullstory}>Full Story</Text>

                    <Box background={"#F0E821"} height={13} width={110.5} marginTop={-3.5} marginLeft={-1.5}></Box>
                </Box>
                <Box height={0.5} background={"#EDEDED"} width={930} marginTop={3}></Box>

                <Text className={styles.secondArticle_head_item} id={styles.SeeNow}>See now</Text>
            </Box >
            <Box className={styles.secondArticle} display={"flex"}>

                <Box className={styles.secondArticle_list}>
                    <Text className={styles.secondArticle_list_item} id={styles.author}>By James Landale</Text>
                    <Text className={styles.secondArticle_list_item} id={styles.team}>TeamliserVCorp</Text>
                    <Text className={styles.secondArticle_list_item} id={styles.secondArticle_item_title}>
                        Ukraine war: Five ways Russia’s invasion may play out</Text>
                    <RTETag isEarn={false} />
                    <Text className={styles.secondArticle_list_item} id={styles.secondArticle_item_content}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                        <strong> Read More...</strong>
                    </Text>
                </Box>
                <Image src="/img/article2.png" alt="" className={styles.secondArticle_list} id={styles.img}
                    height={301}
                    width={620} />
            </Box>

        </>
    )
}