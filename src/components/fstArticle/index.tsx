import React from 'react'
import styles from "@/styles/Home.module.scss";

export default function firstArticle() {
    return (
        <>
            {/* // first Article */}
            <div className={styles.firstArticle}>
                <img src="/img/article1.png" alt="" className={styles.firstArticle_list} />
                <div className={styles.firstArticle_list}>
                    <p className={styles.firstArticle_item} id={styles.firstArticle_item_title}>
                        Web wallet Xverse added support for NFTs on the Bitcoin network
                    </p>
                    <button className={styles.firstArticle_item} id={styles.firstArticle_item_earn}>
                        #EARN
                    </button>
                    <p className={styles.firstArticle_item} id={styles.firstArticle_item_main_content}>
                        If you use the Ordinals protocol,
                        which allows you to inscribe NFT data onto the Bitcoin
                    </p>
                    <p className={styles.firstArticle_item} id={styles.firstArticle_item_content}>
                        Cyber-crime and money laundering were covered in a separate chapter.
                        But it seems that all regulators' songs have this refrain that they keep using.
                        Cyber-crime and money laundering were covered in a separate chapter. But it seems
                        <strong> Read More...</strong>
                    </p>
                </div>
            </div>

            {/* second Article */}
            <div className={styles.secondArticle_head}>
                <p className={styles.secondArticle_head_item} id={styles.Fullstory}>Full Story</p>
                <p className={styles.secondArticle_head_item} id={styles.SeeNow}>See now</p>
            </div>
            <div className={styles.secondArticle}>

                <div className={styles.secondArticle_list}>
                    <p className={styles.secondArticle_list_item} id={styles.author}>By James Landale</p>
                    <p className={styles.secondArticle_list_item} id={styles.team}>TeamliserVCorp</p>
                    <p className={styles.secondArticle_list_item} id={styles.secondArticle_item_title}>
                        Ukraine war: Five ways Russia’s invasion may play out</p>
                    <button className={styles.secondArticle_list_item} id={styles.btnFree}>#FREE</button>
                    <p className={styles.secondArticle_list_item} id={styles.secondArticle_item_content}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                        <strong> Read More...</strong>
                    </p>
                </div>
                <img src="/img/article2.png" alt="" className={styles.secondArticle_list} />
            </div>

        </>
    )
}
