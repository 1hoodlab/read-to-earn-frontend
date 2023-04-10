import React from 'react'
import styles from "@/styles/Home.module.scss";

export default function fstA() {
    return (
        <>
            {/* // first Article */}
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

            {/* second Article */}
            <div className={styles.secA_head}>
                <p className={styles.secA_head_item} id={styles.Fullstory}>Full Story</p>
                <p className={styles.secA_head_item} id={styles.SeeNow}>See now</p>
            </div>
            <div className={styles.secA}>

                <div className={styles.secA_list}>
                    <p className={styles.secA_list_item} id={styles.author}>By James Landale</p>
                    <p className={styles.secA_list_item} id={styles.team}>TeamliserVCorp</p>
                    <p className={styles.secA_list_item} id={styles.secA_item_title}>
                        Ukraine war: Five ways Russia’s invasion may play out</p>
                    <button className={styles.secA_list_item} id={styles.btnFree}>#FREE</button>
                    <p className={styles.secA_list_item} id={styles.secA_item_content}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                        <strong> Read More...</strong>
                    </p>
                </div>
                <img src="/img/article2.png" alt="" className={styles.secA_list} />
            </div>

        </>
    )
}
