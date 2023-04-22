import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, UnorderedList, ListItem } from '@chakra-ui/react'

export default function Menu() {
    return (
        <Box className={styles.menu}>
            <UnorderedList className={styles.menu_list}>
                <ListItem className={styles.text}>Home</ListItem>
                <ListItem className={styles.text}>War in Ukraina</ListItem>
                <ListItem className={styles.text}>Coronavirus</ListItem>
                <ListItem className={styles.text}>World</ListItem>
                <ListItem className={styles.text}>Asia</ListItem>
                <ListItem className={styles.text}>UK</ListItem>
                <ListItem className={styles.text}>Tech</ListItem>
                <ListItem className={styles.text}>Stories</ListItem>
                <ListItem className={styles.text}>Enterintment & Arts</ListItem>
                <ListItem className={styles.text}>Health</ListItem>
                <ListItem className={styles.text}>Business</ListItem>
            </UnorderedList>
        </Box>
    )
}