import { Box, Text, } from '@chakra-ui/react'
import React from 'react'
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { getNowddddMMMMDYYYY } from '@/utils';
import ButtonRte from '../button';
export default function Header() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      className={styles.home_top__container}
    >
      <Box display={"flex"}>
        <Box marginRight={"23px"}>
          <Image
            src={"/assets/logo.svg"}
            alt={"123"}
            width={100}
            height={24}
          />
        </Box>
        <Box padding={"3px"}>
          <Text fontWeight={800} fontSize={"10px"} lineHeight={"12px"}>
            {getNowddddMMMMDYYYY()}
          </Text>
          <Text fontSize={"10px"} fontWeight={"medium"} color={"black.300"}>
            Today’s paper
          </Text>
        </Box>
      </Box>

      <Box display={"flex"} className={styles.home_user}>
        <Box className={styles.home_user_info}>
          <Text fontWeight={800} fontSize={"10px"} lineHeight={"12.1px"} className={styles.home_user_item}>
            John Snow
          </Text>
          <Text fontWeight={500} fontSize={"10px"} lineHeight={"12px"} color={"#A3A3A3"} className={styles.home_user_item}>
            member
          </Text>
        </Box>
        <Image
          src={"/img/avatar.png"}
          alt={"123"}
          width={40}
          height={40}
        />
      </Box>
    </Box>
  )
}