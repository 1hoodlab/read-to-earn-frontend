import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Button } from '@chakra-ui/react'

export default function ButtonFree() {
    return (
        <Button id={styles.btnFree}>
            #FREE
        </Button>
    )
}