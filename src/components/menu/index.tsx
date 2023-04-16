import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Box, Text } from '@chakra-ui/react'

export default function Menu() {
    return (
        <Box className={styles.menu}>
            <Box className={styles.menu_list}>
                <Text className={styles.text}>Home</Text>
                <Text className={styles.text}>War in Ukraina</Text>
                <Text className={styles.text}>Coronavirus</Text>
                <Text className={styles.text}>World</Text>
                <Text className={styles.text}>Asia</Text>
                <Text className={styles.text}>UK</Text>
                <Text className={styles.text}>Tech</Text>
                <Text className={styles.text}>Stories</Text>
                <Text className={styles.text}>Enterintment & Arts</Text>
                <Text className={styles.text}>Health</Text>
                <Text className={styles.text}>Business</Text>
            </Box>
        </Box>
    )
}
