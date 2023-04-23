import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Button } from '@chakra-ui/react'

type Tag = {
    isEarn: boolean;
}

export default function TagEarn({ isEarn }: Tag) {
    return (
        <Button id={styles.tagEarn} background={
            isEarn ? '#fff500' : '#00ff75'
        }>
            {
                isEarn ? '#EARN' : '#FREE'
            }
        </Button>
    )
}