import React from 'react'
import styles from "@/styles/Home.module.scss";

export default function fstA() {
    return (
        // first Article
        <div className={styles.fstA}>
            <img src="/img/article1.png" alt="" className={styles.fstA_list} />
            <div className={styles.fstA_list}>
                <p className={styles.fstA_item} id={styles.fstA_item_title}>
                    Web wallet Xverse added support for NFTs on the Bitcoin network
                </p>
                <button className={styles.fstA_item} id={styles.fstA_item_earn}>
                    #EARN
                </button>
                <p className={styles.fstA_item} id={styles.fstA_item_main_content}>
                    If you use the Ordinals protocol,
                    which allows you to inscribe NFT data onto the Bitcoin
                </p>
                <p className={styles.fstA_item} id={styles.fstA_item_content}>
                    Cyber-crime and money laundering were covered in a separate chapter.
                    But it seems that all regulators' songs have this refrain that they keep using.
                    Cyber-crime and money laundering were covered in a separate chapter. But it seems
                    <strong> Read More...</strong>
                </p>
            </div>
        </div>
    )
}
