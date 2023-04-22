import React from 'react'
import styles from "@/styles/Home.module.scss";
import { Button } from '@chakra-ui/react'

type Tag = {
    isEarn: string;
}

export default function TagEarn({ isEarn }: Tag) {
    return (
        <Button id={styles.tagEarn} background={
            (isEarn = 'Earn') ? '#fff500' :
                (isEarn = 'Free') ? '#00ff75' : ''
        }>
            {
                (isEarn = 'Earn') ? '#EARN' :
                    (isEarn = 'Free') ? '#FREE' : ''
            }
        </Button>
    )
}