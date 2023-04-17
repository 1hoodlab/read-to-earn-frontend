import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, Text, Button, space } from '@chakra-ui/react'
import Image from "next/image";
import ButtonEarn from "@/components/ButtonEarn";

export default function ListArticle() {
    return (
        <Box className={styles.listArticle} display={"flex"}  >
            <Box className={styles.listArticle_list} paddingRight={-10}>
                <Image src="/img/listArticle_img1.png" alt=""
                    className={styles.listArticle_item}
                    height={159}
                    width={353}
                />
                <Text className={styles.listArticle_item} id={styles.author} paddingRight={28}>By James Landale</Text>
                <Text className={styles.listArticle_item} id={styles.team} paddingRight={28}>TeamliserVCorp</Text>
                <Text className={styles.listArticle_item} id={styles.listArticle_item_content} paddingRight={5}>
                    Nghiên cứu cho thấy game thủ có kỹ năng đưa ra quyết
                    định tốt hơn với hoạt động não bộ tăng cường
                </Text>
                <ButtonEarn></ButtonEarn>
            </Box>
            <Box className={styles.listArticle_list} marginBottom={16} marginRight={5}>
                <Image src="/img/listArticle_img2.png" alt=""
                    className={styles.listArticle_item}
                    height={159}
                    width={376}
                />
                <Text className={styles.listArticle_item} id={styles.author} paddingRight={28}>By James Landale</Text>
                <Text className={styles.listArticle_item} id={styles.team} paddingRight={28}>TeamliserVCorp</Text>
                <Text className={styles.listArticle_item} id={styles.listArticle_item_content} paddingRight={5}>
                    Dynamic avatars for legacy capture:
                    a revolution of blockchain use in the making
                </Text>
                <ButtonEarn></ButtonEarn>
            </Box>
            <Box className={styles.listArticle_list}>
                <Image src="/img/listArticle_img3.png" alt=""
                    className={styles.listArticle_item}
                    height={159}
                    width={376}

                />
                <Text className={styles.listArticle_item} id={styles.author} paddingRight={28}>By James Landale</Text>
                <Text className={styles.listArticle_item} id={styles.team} paddingRight={28}>TeamliserVCorp</Text>
                <Text className={styles.listArticle_item} id={styles.listArticle_item_content} paddingRight={5}>
                    Blockchain.com Shopping Assets to Fill
                    $270M Hole From Three Arrows Capital: Sources
                </Text>
                <ButtonEarn></ButtonEarn>
            </Box>
        </Box>
    )
}
