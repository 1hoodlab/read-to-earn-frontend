import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Button, background } from '@chakra-ui/react'

type Tag = {
    isEarn: boolean
}


export default function TagEarn({ isEarn }: Tag) {

    return (
        <Button id={styles.tagEarn}>
            {isEarn
                ? "#EARN"

                : "#FREE"
            }

        </Button>
    )
}