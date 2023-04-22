import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Button } from '@chakra-ui/react'

type Tag = {
    isEarn: boolean
    isYellow: boolean
}

export default function TagEarn({ isEarn, isYellow }: Tag) {
    return (
        <Button id={styles.tagEarn} background={
            isYellow ? "#fff500" : "#00ff75"
        }>
            {isEarn ? "#EARN" : "#FREE"}
        </Button>
    )
}