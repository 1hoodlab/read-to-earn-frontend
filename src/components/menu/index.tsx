import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, UnorderedList, ListItem } from '@chakra-ui/react'

export default function Menu() {
    return (
        <Box className={styles.menu} marginTop={3.37} >
            <UnorderedList className={styles.menu_list} justifyContent={'space-around'} textAlign={'center'}>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>Home</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>War in Ukraina</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>Coronavirus</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>World</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>Asia</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>UK</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>Tech</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>Stories</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>Enterintment & Arts</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>Health</ListItem>
                <ListItem className={styles.text} fontWeight={600} fontSize={"12px"} lineHeight={"15px"} color={"#5A5A5A"}>Business</ListItem>
            </UnorderedList>
        </Box>
    )
}