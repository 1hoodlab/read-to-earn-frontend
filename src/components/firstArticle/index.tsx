import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, Text, Button } from '@chakra-ui/react'
import Image from "next/image";

export default function FirstArticle() {
    return (
        <>
            {/* // first Article */}
            <Box className={styles.firstArticle}>
                <Image src="/img/article1.png"
                    alt=""
                    className={styles.firstArticle_list}
                    height={275}
                    width={523.0850830078125}
                    id={styles.img} />
                <Box className={styles.firstArticle_list}>
                    <Text className={styles.firstArticle_item} id={styles.firstArticle_item_title}>
                        Web wallet Xverse added support for NFTs on the Bitcoin network
                    </Text>
                    <Button className={styles.firstArticle_item} id={styles.firstArticle_item_earn}>
                        #EARN
                    </Button>
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
                <Text className={styles.secondArticle_head_item} id={styles.Fullstory}>Full Story</Text>
                <Text className={styles.secondArticle_head_item} id={styles.SeeNow}>See now</Text>
            </Box>
            <Box className={styles.secondArticle}>

                <Box className={styles.secondArticle_list}>
                    <Text className={styles.secondArticle_list_item} id={styles.author}>By James Landale</Text>
                    <Text className={styles.secondArticle_list_item} id={styles.team}>TeamliserVCorp</Text>
                    <Text className={styles.secondArticle_list_item} id={styles.secondArticle_item_title}>
                        Ukraine war: Five ways Russia’s invasion may play out</Text>
                    <Button className={styles.secondArticle_list_item} id={styles.btnFree}>#FREE</Button>
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
